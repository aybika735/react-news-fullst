import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../features";

const Signinpage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const signingIn = useSelector((state) => state.signingIn);
  const error = useSelector((state) => state.news.error);

  const handleChangeLogin = (e) => setLogin(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = () => dispatch(auth(login, password));

  return (
    <div className="registration">
      {error}
      <div className="inputemail">
        <div className="erroremail"></div>
        <div className="inputvaluelog">
          <input
            name="email"
            type="text"
            placeholder="Enter your email..."
            value={login}
            onChange={(e) => handleChangeLogin(e)}
          />
        </div>
      </div>
      <div className="inputpassword">
        <div className="errorpassword"></div>

        <div className="inputvaluepas">
          <input
            name="password"
            type="text"
            placeholder="Enter your password..."
            value={password}
            onChange={(e) => handleChangePassword(e)}
          />
        </div>
      </div>
      <button
        className="btn"
        type="sumbit"
        disabled={signingIn}
        onClick={handleSubmit}
      >
        вход
      </button>
    </div>
  );
};

export default Signinpage;
