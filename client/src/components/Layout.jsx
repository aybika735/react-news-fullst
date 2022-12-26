import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import instagram from "../icons/instagram.png";
import telegram from "../icons/telegram.png";
import facebook from "../icons/facebook.png";
import linkedin from "../icons/linkedin.png";
import whatsapp from "../icons/whatsapp.png";
import youtube from "../icons/youtube.png";
// import { fetchTodos } from "../features/todosReducer";
// import {fetchComments} from '../features/commentsReducer'
// import { useDispatch } from 'react-redux';

// import { useEffect } from "react";

const Layout = () => {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchTodos())
  //   dispatch(fetchComments())
  // },[dispatch])
  const [poisk] = useState("Поиск по сайту");

  return (
    <>
      <div className="header">
        <div className="logo">TodayNews</div>
        <div className="input">
          <form>
            <input type="text" name="text" value={poisk} />
          </form>
        </div>
        <Link className="registration" to="/signup">
          Регистрация
        </Link>
        <Link to="/signin">Вход</Link>
      </div>

      <hr></hr>
      <div className="navigation">
        <Link className="nav-link" to="/">
          Главная
        </Link>
        <Link className="nav-link" to="/sport">
          Спорт
        </Link>
        <Link className="nav-link" to="/politic">
          Политика
        </Link>
        <Link className="nav-link" to="/put">
          Путешествия
        </Link>
      </div>
      <div className="maincontant">
        <Outlet />
      </div>
      
     
      <div className="footer">
        <div className="footer-flex">
          <div className="logo">TodayNews</div>
          <div className="footer-text">Социальные сети</div>
        </div>
        <div className="info">
          <div className="category">
            <p>Спорт</p>
            <p>Политика</p>
            <p>Путешествие</p>
          </div>
          <div className="social">
            <div className="">
              <img src={instagram} alt="" />
              <img src={telegram} alt="" />
            </div>
            <div>
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
            </div>
            <div>
              <img src={whatsapp} alt="" />
              <img src={youtube} alt="" />
            </div>
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
