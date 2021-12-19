import React, { useState } from "react";
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainHeading,
  MainParagraph,
  MainBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./mainSectionStyle";
import { Button } from "../ButtonElement";
import Video from "../../videos/video1.mp4";

export default function MainSection() {
  const [hover, setHover] = useState(false);

  const onHOver = () => {
    setHover(!hover);
  };

  return (
    <MainContainer id="home">
      <MainBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MainBg>
      <MainContent>
        <MainHeading>We are for every child's safety!</MainHeading>
        <MainParagraph>
          At Kids World we are not for profit, so we can de more for children.
          Enrol now!
        </MainParagraph>
        <MainBtnWrapper>
          <Button
            to="enrol"
            onMouseEnter={onHOver}
            onMouseLeave={onHOver}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </MainBtnWrapper>
      </MainContent>
    </MainContainer>
  );
}
