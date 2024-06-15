import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "./Main.scss";

export const Main = () => {
  const calculateTimeLeft = () => {
    const endDate = new Date("2024-06-16T00:00:00");
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
          <span>Айлин Пулатова - Узбекский Дом Моды и Предметов Роскоши</span>{" "}
          Изысканные наряды и предметы роскоши, объединяющие узбекские традиции
          и современные тенденции.
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
