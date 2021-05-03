import React, { useState } from "react";

const Iframe = () => {
  const [url, setUrl] = useState("");

  return <iframe src="https://www.amazon.com/" title="amazon" target="_parent" is="x-frame-bypass"></iframe>;
  // return <iframe src="https://ksp.co.il/" title="amazon" target="_parent"></iframe>;
};

export default Iframe;
