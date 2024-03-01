import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Login from "./pages/LoginPage/Login";

export const SearchKeyword = React.createContext();
export const DispatchContext = React.createContext();

const Router = () => {
  const [keyword, setKeyword] = useState();
  const onSearch = (keywordInput) => {
    setKeyword(keywordInput);
  };
  return (
    <SearchKeyword.Provider value={keyword}>
      <DispatchContext.Provider value={{ onSearch }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </DispatchContext.Provider>
    </SearchKeyword.Provider>
  );
};

export default Router;
