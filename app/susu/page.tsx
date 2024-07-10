'use client'
import { useState } from 'react'
import Footer from '../../components/footer/page'
import styles from './susu.module.scss'
import LoginForm from '@/ui/login/loginForm'

export default function susu() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return <div className={styles.layoutContainer}>{isAuthenticated ? <Footer /> : <LoginForm />}</div>
}
