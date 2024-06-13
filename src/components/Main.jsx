import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Main.scss";

export const Main = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2024-07-13T00:00:00"); // 30 дней от 13 июня
    const now = new Date();
    const difference = endDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="main">

      <div className="main__left">
        <div className="main__left_top">
          <img src={logo} alt="Logo" />
        </div>
        <div className="main__left_title">
          Индивидуальный пошив и ремонт одежды. Мастера, качество, скорость.
          Ваши идеи – наша работа!
        </div>
      </div>
      <div className="main__right">
        <h2>Открытие через...</h2>
        <div className="main__right_count">
          <div className="main__item">
            <p>{timeLeft.days || "0"}</p>
            <p>дней</p>
          </div>
          <div className="main__item">
            <p>{timeLeft.hours || "0"}</p>
            <p>часов</p>
          </div>
          <div className="main__item">
            <p>{timeLeft.minutes || "0"}</p>
            <p>минут</p>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Main;
