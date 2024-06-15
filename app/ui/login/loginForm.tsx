'use client'
// components/LoginForm.js
import { useState } from 'react'
import { validEmail, validPassword } from '@/lib/validation'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailErrorText, setEmailErrorText] = useState('')
  const [passwordErrorText, setPasswordErrorText] = useState('')
  const [] = useState()

  const handleSubmit = async () => {
    alert('in handleSubmit')
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
