import React from "react";
import styled from "styled-components";
import LoginBackground from "../assets/images/login-background.jpg";
import LogoOne from "../assets/images/cta-logo-one.svg";
import LogoTwo from "../assets/images/cta-logo-two.png";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src={LogoOne} />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Immerse yourself in a world of cinematic wonders. Explore a vast
          collection of timeless movies, from heartwarming classics to gripping
          thrillers. Join us now and experience the magic of movies like never
          before.
        </Description>
        <CTALogoTwo src={LogoTwo} />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url(${LoginBackground});
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  background-color: #0063e5;
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  padding: 17px 0px;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  transition: all 500ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled(CTALogoOne)`
  width: 100%;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;
