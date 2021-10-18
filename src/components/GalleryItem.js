import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {
  useBoundingclientrect,
  useOnWindowResize,
  useOnWindowScroll
} from "rooks";
import { Controller, Scene } from "react-scrollmagic";
import WaterWave from "react-water-wave";
import { Tween, Timeline, SplitLetters } from "react-gsap";
import YouTube from "react-youtube";

import Tilt from "react-tilt";
import Particles from "react-particles-js";
import BlockRevealAnimation from "react-block-reveal-animation";
import profileImage from "@/assests/profile.jpg";
import Cover from "@/components/Cover";
import Snuggle from "react-snuggle";

import pic1 from "@/assests/asics.gif";
import emoving from "@/assests/emoving.jpg";

const GalleryDiv = styled.div`
  width: 100%;
  display: block;
  flex: 0 33.3333%;
  padding: 12px;
  cursor: pointer;
  position: relative;

  .gallery-modal {
    position: fixed;
    top: 0;
    left: 0;
    /* width: 100%;
    height: 100%; */
    .pic {
      width: 100%;
      padding-bottom: 75%;
      background: url("../src/assests/asics.gif") center/cover no-repeat;
      /* background-attachment: fixed; */
    }
  }
  .item {
    transition: 0.3s ease all;

    .pic {
      width: 100%;
      padding-bottom: 75%;
      background: url("../src/assests/asics.gif") center/cover no-repeat;
      /* background-attachment: fixed; */
    }

    .des {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: rgba(0, 0, 0, 0.6);
      transition: 0.3s ease all;
      display: flex;
      align-items: center;
      text-align: center;
      &:hover {
        opacity: 0.8;
      }
      p {
        font-size: 1em;
        margin: 10px;
        color: white;
        text-align: center;
        display: block;
        width: 100%;
      }
    }
  }
`;
const GalleryItem = ({ progress }) => {
  const el = useRef(null);
  const [rect, setRect] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getPos();
    window.addEventListener("scroll", getPos);
    window.addEventListener("resize", getPos);
  }, []);

  function getPos() {
    if (el.current) {
      setRect(el.current.getBoundingClientRect());
    }
  }

  return (
    <GalleryDiv>
      <div
        ref={el}
        onClick={() => setIsOpen(!isOpen)}
        className={`item ${isOpen ? "active" : ""}`}
      >
        <div className="pic" />
        <div className="des">
          <p>亞瑟士</p>
        </div>
      </div>
      <div
        className="gallery-modal"
        style={{
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left
        }}
      >
        <div className="pic" />
      </div>
    </GalleryDiv>
  );
};

export default GalleryItem;
