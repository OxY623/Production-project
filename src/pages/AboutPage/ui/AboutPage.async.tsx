import React from "react";

const AboutPageAsync = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("./AboutPage")), 3000),
    ),
);

export default AboutPageAsync;
