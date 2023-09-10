import React, { useEffect } from "react";
import styled from "styled-components";
import MainBackground from "../assets/images/home-background.png";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import db from "../firebase";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/userSlice";
import { setMovies } from "../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        console.log('recommends');
        switch (doc.data().type) {
          case "recommend":
            // recommends.push({ id: doc.id, ...doc.data() });
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            // newDisneys.push({ id: doc.id, ...doc.data() });
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            // originals.push({ id: doc.id, ...doc.data() });
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            // trending.push({ id: doc.id, ...doc.data() });
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
    });

    dispatch(
      setMovies({
        recommends: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url(${MainBackground}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
