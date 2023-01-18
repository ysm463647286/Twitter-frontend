import { useState } from 'react';
import './index.css';

const Login= () => {
  const [name, setName] = useState();
  const [pwd, setPwd] = useState();

  console.log(name);
  const clickHandler = () => {
    alert('Logged in' + name + ',' + pwd);
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }
  const onChangePwHandler = (e) => {
    setPwd(e.target.value);
  }
  return (
    <div className="login">
      <div>User name: <input onChange={onChangeNameHandler}/></div>
      <div>Password: <input type="password" onChange={onChangePwHandler}/></div>
      <div><button onClick={clickHandler}>Log in</button></div>
    </div>
  );
}

export default Login;
