import React from "react";
import styled from "styled-components";
import PlayIconBlack from "../assets/images/play-icon-black.png";
import PlayIconWhite from "../assets/images/play-icon-white.png";
import GroupIcon from "../assets/images/group-icon.png";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="https://kenh14cdn.com/203336854389633024/2021/8/8/f637608339549712705-16284062345831945169414.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://i.postimg.cc/kMZH51Dd/bottom.png" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src={PlayIconBlack} />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src={PlayIconWhite} />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src={GroupIcon} />
        </GroupButton>
      </Controls>
      <SubTitle>2018 - 7m - Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        Friends since undergrad school, five doctors remain close and share a
        love for music while working at the same hospital.
      </Description>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  font-size: 15;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  padding: 0 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  margin-right: 16px;

  span {
    font-size: 30px;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const GroupButton = styled(AddButton)`
  background-color: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
