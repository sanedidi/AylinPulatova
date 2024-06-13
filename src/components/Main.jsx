import React from "react";
import logo from "../assets/logo.png";
import './Main.scss'
export const Main = () => {
  return (
    <>
      <div className="main">
        <div className="main__left">
          <div className="main__left_top">
            <img src={logo} alt="" />
          </div>
          <div className="main__left_title">
            Индивидуальный пошив и ремонт одежды. Мастера, качество, скорость.
            Ваши идеи – наша работа!
          </div>
        </div>
        <div className="main__right">
            
        </div>
      </div>
    </>
  );
};

export default Main;
