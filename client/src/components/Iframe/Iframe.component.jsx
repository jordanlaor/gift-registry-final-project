import React, { useState } from "react";
import "./iframe.css";

const Iframe = (props) => {
  const { src, onError } = props;
  // return <iframe src="https://www.amazon.com/" title="amazon" target="_parent" is="x-frame-bypass"></iframe>;
  return <iframe id="gift-list-iframe" src={src} title={src} target="_parent" is="x-frame-bypass"></iframe>;
  // return <iframe onError={onError} id="gift-list-iframe" src={src} title={src} target="_parent" is="x-frame-bypass"></iframe>;
};

export default Iframe;
