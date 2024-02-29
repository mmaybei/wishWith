import React from "react";

import Main from "./pages/MainPage/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};
