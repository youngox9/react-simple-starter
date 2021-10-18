import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import WaterWave from "react-water-wave";
import { Tween, Timeline, SplitLetters } from "react-gsap";
import YouTube from "react-youtube";

import Tilt from "react-tilt";
import Particles from "react-particles-js";
import BlockRevealAnimation from "react-block-reveal-animation";
import profileImage from "@/assests/profile.jpg";
import GalleryItem from "@/components/GalleryItem";

const GalleryDiv = styled.div`
  .list {
    display: block;
    width: 1200px;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;
const Gallery = ({ progress }) => (
  <GalleryDiv className="panel">
    <div className="list">
      <GalleryItem />
    </div>
  </GalleryDiv>
);

export default Gallery;
