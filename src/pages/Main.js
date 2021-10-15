import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";

import Cover from "@/components/Cover";
import Profile from "@/components/Profile";
import Gallery from "@/components/Gallery";

const Container = styled.div`
  overflow: hidden;
  .panel {
    min-height: 100vh;
    width: 100vw;
    text-align: center;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Main = () => (
  <Container>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel">
          <Scene duration={600}>
            {(progress, event) => <Cover progress={progress} />}
          </Scene>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel">
          <Scene duration={600}>
            {(progress, event) => <Profile progress={progress} />}
          </Scene>
        </div>
      </Scene>
      <Scene>
        <div className="panel">
          <Scene duration={600}>
            {(progress, event) => <Gallery progress={progress} />}
          </Scene>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel">
          <span>Panel</span>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel">
          <span>Panel</span>
        </div>
      </Scene>
    </Controller>
  </Container>
);

export default Main;
