'use client'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickName: '',
    email: '',
    phone: '',
  })
  const [message, setMessage] = useState('')

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await res.json()

    if (res.ok) {
      setMessage('User added successfully')
      setFormData({
        id: '',
        password: '',
        nickName: '',
        email: '',
        phone: '',
      })
    } else {
      setMessage(`Failed to add user: ${data.message}`)
    }
  }

  return (
    <div>
      <h1>Add New User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="ID" value={formData.id} onChange={handleChange} required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input type="text" name="nickName" placeholder="NickName" value={formData.nickName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        <button type="submit">Add User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}
