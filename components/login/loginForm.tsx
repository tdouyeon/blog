'use client'
// components/LoginForm.js
import { useState } from 'react'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth, login } from '../../firebase/firebase'
import { validEmail, validPassword } from '@/lib/validation'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrorText, setEmailErrorText] = useState('')
  const [passwordErrorText, setPasswordErrorText] = useState('')
  const [] = useState()

  const handleSubmit = async () => {
    alert('in handleSubmit')
    if (!emailErrorText && !passwordErrorText) {
      try {
        console.log('여기까지 오셨나요?', email, password)
        const user = await login({ email, password })
        alert('로그인 성공입니다.')
      } catch (error) {
        alert('로그인 중 에러가 발생하였습니다. 다시 시도해 주세요.')
      }
    }
  }
  function handleGoogleLogin() {
    const provider = new GoogleAuthProvider() // provider 구글 설정
    signInWithPopup(auth, provider) // 팝업창 띄워서 로그인
      .then((data) => {
        console.log(data) // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            setEmailErrorText(validEmail(e.target.value))
          }}
        />
        {emailErrorText && <div style={{ color: 'red' }}>{emailErrorText}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
            setPasswordErrorText(validPassword(e.target.value))
          }}
        />
      </div>
      {passwordErrorText && <div style={{ color: 'red' }}>{passwordErrorText}</div>}
      <button onClick={handleSubmit}>Login</button>
      //{' '}
    </form>
  )
}

export default LoginForm
