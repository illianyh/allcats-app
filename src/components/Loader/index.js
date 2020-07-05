import React from "react";
import Lottie from "react-lottie";
import * as loading from "./data.json";

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="loader">
      <Lottie options={defaultOptions} height={250} width={250} />
    </div>
  );
};

export default Loader;
