import React, { useState } from "react";
import "./iframe.css";

const Iframe = (props) => {
  const { src } = props;
  // return <iframe src="https://www.amazon.com/" title="amazon" target="_parent" is="x-frame-bypass"></iframe>;
  return <iframe src={src} title={src} target="_parent" is="x-frame-bypass"></iframe>;
};

export default Iframe;