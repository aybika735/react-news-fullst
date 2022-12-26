import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../features/newsReducer";

const Signinpage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signingIn = useSelector((state) => state.signingIn);

  const error = useSelector((state) => state.news.error);
  console.log(error)
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth(login, password));
  };
  return (
    <div className="registration">
      {error}
      <div>
        <input
          type="text"
          placeholder="type login"
          value={login}
          onChange={handleChangeLogin}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="type password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button disabled={signingIn} onClick={handleSubmit}>
        авторизация
      </button>
    </div>
  );
};

export default Signinpage;
