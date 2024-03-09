import React, { Component } from "react";
import Categories from "./Categories";
import FeatureProduct from "./FeatureProduct";
import Search from "./Search";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useStorage";

function Feed() {
  const navigate = useNavigate();
  const [, , remove] = useLocalStorage("auth-token");

  const logout = () => {
    localStorage.removeItem("auth-token");
    navigate("/");
  };
  return (
    <>
      <Nav logout={logout} />
      <Search />
      <Categories />
      <div id="feature">
        <FeatureProduct />
      </div>
    </>
  );
}

export default Feed;
