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

const ProfileDiv = styled.div`
  .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    background-color: #161321;
  }
  .profile {
    width: 100%;
    max-width: 1200px;
    .pic {
      border-radius: 100%;
      overflow: hidden;
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 100%;
      animation: animate__fadeInUp 0.6s 0s 1 both;
      img {
        width: 100%;
      }
    }

    .row {
    }
    p {
      line-height: 2;
      font-size: 16px;
    }
  }
`;
const Profile = ({ progress }) => (
  <ProfileDiv className="panel">
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 100
          },
          size: {
            value: 0
          },
          line_linked: {
            shadow: {
              enable: true,
              color: "#000000",
              blur: 0,
              width: 20
            }
          }
        }
      }}
    />
    <div className="wrap">
      <div className="profile">
        <div className="row align-items-center justify-content-center">
          <div className="col col-3">
            <Tilt
              className="Tilt"
              options={{ max: 25 }}
              // style={{ height: 250, width: 250 }}
            >
              <div className="pic">
                <img src={profileImage} alt="" />
              </div>
            </Tilt>
          </div>
          <div className="col">
            <p>
              Rex Chen
              <br />
              今年31歲，來自澎湖，目前現居高雄 <br />
              興趣是桌球/羽球/爬山
              <br />
              熱愛動物(特別是狗)
              <br />
              <br />
              七年前端開發經驗，目前任職於 博相科技股份公司，擔任前端工程師
              <br />
              過去任職於緯創資通、倚睿數位
              <br />
              熱愛前端，也喜歡鑽研有趣的東西
              <br />
              專長為 ReactJS, VueJS
            </p>
          </div>
        </div>
      </div>
    </div>
  </ProfileDiv>
);

export default Profile;
