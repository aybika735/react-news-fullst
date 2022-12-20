import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../features/newsReducer";

const Signuppage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const signingUp = useSelector((state) => state.signingUp);

  const error = useSelector((state) => state.error);
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(createUser(login, password));
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
      <button disabled={signingUp} onClick={handleSubmit}>
        регистрация
      </button>
    </div>
  );
};

export default Signuppage;
