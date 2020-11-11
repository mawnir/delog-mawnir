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
          href: "",
        },
        
      ]}
      script={[
        {
          src:
            "",
        },
      ]}
    />
  );
};

export default SEO;



