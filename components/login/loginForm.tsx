'use client'
// components/LoginForm.js
import { useState } from 'react';
import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, login } from '../../firebase/firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');

  // const handleSubmit = async () => {
  //   alert("in handleSubmit")
  //     try {
  //       console.log("여기까지 오셨나요?",email,password)
  //       const  user  = await login({email, password});
  //       alert(`성공이군요!!${user}`)
  //       setErrors({});
  //       setLoginError('');
  //       // 로그인 성공 후 처리
  //       alert(`여기까지 오셨나요?${email}${password}`)
  //     } catch (error) {
  //       alert(`실패군요!!!`)
  //       setLoginError('Failed to login. Please check your email and password.');
  //     }
  // };
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    // <form onSubmit={handleGoogleLogin}>
    //   <div>
    //     <label htmlFor="email">Email</label>
    //     <input
    //       id="email"
    //       type="email"
    //       value={email}
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //   </div>

    //   <div>
    //     <label htmlFor="password">Password</label>
    //     <input
    //       id="password"
    //       type="password"
    //       value={password}
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //   </div>

    //   {loginError && <div style={{ color: 'red' }}>{loginError}</div>}

      <button onClick={handleGoogleLogin}>Login</button>
    // </form>
  );
};

export default LoginForm;