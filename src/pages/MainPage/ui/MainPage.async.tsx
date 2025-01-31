import React from "react";

const MainPageAsync = React.lazy(
  () =>
    new Promise((resolve) =>
      //@ts-ignore
      setTimeout(() => resolve(import("./MainPage")), 3000),
    ),
);

export default MainPageAsync;
