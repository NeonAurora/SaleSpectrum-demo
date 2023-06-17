import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/gram.json";

const LoadingScene = () => (
  <Lottie
    animationData={groovyWalkAnimation}
    loop={true}
    style={{ width: "100%", height: "300px"}}
  />
);

export default LoadingScene;
