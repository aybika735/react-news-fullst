import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "../features/newsReducer";
import { useEffect } from "react";
const Signuppage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty]=useState(false)
  const [passwordDirty, setPasswordlDirty]=useState(false)
  const [emailError, setEmailError] = useState('Емайл не может быть пустым')
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const signingUp = useSelector((state) => state.signingUp);
 const [formvalid, setFormValid] = useState(signingUp);
useEffect(()=>{
    if(emailError||passwordError){
setFormValid(false)
    }else{
      setFormValid(true)
    }
  },[emailError, passwordError])
 const error = useSelector((state) => state.news.error);
 const dispatch = useDispatch();
  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLowerCase())){
      setEmailError('Некорректный емейл')
    }else{
      setEmailError('')
    }
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 3 || e.target.value.length>8){
      setPasswordError('Пароль должен быть длинне 3 и меньше 8');
      
    }else{
      setPasswordError('')
    }if(!e.target.value){
      setPasswordError('Пароль не может быть пустым');
    }
  };

  const handleSubmit = () => {
    dispatch(createUser(login, password));
  };
  const blurHandler = (e) =>{

    if(e.target.name==='email'&&e.target.value===''){
       setEmailDirty(true)
    }
    if(e.target.name==='password'&&e.target.value===''){
       setPasswordlDirty(true)
    }
  }
  return (
    <div className="registration">
      {error}
      <div className="inputemail">
        <div className="erroremail">
           {(emailDirty&&emailError)&&<div  style={{color:'red'}}>{emailError}</div>} 
          </div>
       <div className="inputvaluelog">
        <input
        onBlur={(e)=>blurHandler(e)}
        name="email"
          type="text"
          placeholder="Enter your email..."
          value={login}
          onChange={(e)=>handleChangeLogin(e)}
        /> 
        </div>
        
      </div>
      <div className="inputpassword">
        <div className="errorpassword">{(passwordDirty &&passwordError)&&<div  style={{color:'red'}}>{passwordError}</div>}</div>
       
       <div className="inputvaluepas">
        <input
        onBlur={e=>blurHandler(e)}
        name="password"
          type="text"
          placeholder="Enter your password..."
          value={password}
          onChange={(e)=>handleChangePassword(e)}
        />
        </div> 
      </div>
      <button 
      className={!formvalid ? "disabled" : "btn"}
      type="sumbit"
      disabled={!formvalid} 
      onClick={handleSubmit}>
        регистрация
      </button>
    </div>
  );
};

export default Signuppage;
