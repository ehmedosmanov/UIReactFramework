import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./index.module.scss";

const Box = () => {
  return (
    <Helmet>
      <title>Ehmedin react spa-ni</title>
      <meta name="title" content="Ehmedin react spa-ni" />
      <meta name="description" content="Salaam " />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Ehmedin react spa-ni" />
      <meta property="og:description" content="Salaam " />
      <meta
        property="og:image"
        content="https://metatags.io/images/meta-tags.png"
      />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Ehmedin react spa-ni" />
      <meta property="twitter:description" content="Salaam " />
      <meta
        property="twitter:image"
        content="https://metatags.io/images/meta-tags.png"
      />
    </Helmet>
  );
};

export default Box;
