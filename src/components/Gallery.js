import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import WaterWave from "react-water-wave";
import { Tween, Timeline, SplitLetters } from "react-gsap";
import YouTube from "react-youtube";

import Tilt from "react-tilt";
import Particles from "react-particles-js";
import BlockRevealAnimation from "react-block-reveal-animation";
import profileImage from "@/static/profile.jpg";
import Cover from "@/components/Cover";
import Snuggle from "react-snuggle";

import pic1 from "@/static/asics.gif";
import emoving from "@/static/emoving.jpg";

const GalleryDiv = styled.div`
  .list {
    display: block;
    width: 1200px;
    max-width: 100%;
    .item {
      width: 100%;
      display: block;
      .pic {
        width: 100%;
      }
      p {
        font-size: 8px;
        margin: 10px;
      }
    }
  }
`;
const Gallery = ({ progress }) => (
  <GalleryDiv className="panel">
    <div className="list">
      <Snuggle columnWidth={"50%"}>
        <div className="item">
          <img class="pic" src={pic1} />
          <p>亞瑟士 官方網站</p>
        </div>
        <div className="item">
          <img class="pic" src={emoving} />
        </div>
        <div className="item">
          <img class="pic" src={pic1} />
        </div>
      </Snuggle>
    </div>
  </GalleryDiv>
);

export default Gallery;
