import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ seo = {} }) => {

  return (
    <Helmet
      link={[
        {
          rel: "icon"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Staatliches",
        },
        
      ]}
      script={[
        {
          src:
            "https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit.min.js",
        },
        {
          src:
            "https://cdn.jsdelivr.net/npm/uikit@3.5.9/dist/js/uikit-icons.min.js",
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js",
        },
      ]}
    />
  );
};

export default SEO;



