import React from "react";
import styled from "styled-components";
import { Scene } from "react-scrollmagic";
import YouTube from "react-youtube";

import BlockRevealAnimation from "react-block-reveal-animation";

const KvDiv = styled.div`
  filter: blur(${({ progress }) => progress * 12}px);
  transform: translate(0px, 0px);
  backface-visibility: hidden;
  height: 100vh;
  width: 100vw;
  top: 0;
  position: absolute;
  left: 0;
  .fixed-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    .yt-player {
      height: 100%;
    }
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ progress }) => {
    const y = `${progress * 100 * -0.8}%`;
    const scale = `${1 + progress * 2}`;
    return `translate(0px, ${y}) scale(${scale})`;
  }};

  opacity: ${({ progress }) => {
    return 1 - progress;
  }};

  h1 {
    display: flex;
    align-items: flex-start;
    font-size: 6em;
    font-weight: bolder;
    .block-reveal-animation {
      &:nth-child(1) {
        margin-top: 0px;
      }
      &:nth-child(2) {
        margin-top: 1em;
      }
      &:nth-child(3) {
        margin-top: 2em;
      }
    }
  }
`;

const Main = ({ progress }) => (
  <KvDiv progress={progress}>
    <div className="fixed-video">
      <div className="yt-player">
        <YouTube
          className="video"
          videoId="ss-QUzI90to"
          opts={{
            playerVars: {
              autoplay: 1,
              mute: 1,
              playsinline: 1,
              controls: 0
            }
          }}
          onReady={e => e.target.mute()}
        />
      </div>
    </div>
    <div className="wrap">
      {progress < 1 && (
        <Title className="wrap" progress={progress}>
          <h1>
            <BlockRevealAnimation delay={0} duration={1.2} color="#FFFFFF">
              Welcome
            </BlockRevealAnimation>
            <BlockRevealAnimation delay={0.5} duration={1.2} color="#FFFFFF">
              to
            </BlockRevealAnimation>
            <BlockRevealAnimation delay={1} duration={1.2} color="#FFFFFF">
              Rex's Website
            </BlockRevealAnimation>
          </h1>
        </Title>
      )}
    </div>
  </KvDiv>
);

export default Main;
