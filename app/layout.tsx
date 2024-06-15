'use client'
import { Inter } from 'next/font/google'
import Header from '../components/header/page'
import Footer from '../components/footer/page'
import Navbar from '../components/navbar/page'
import styles from './layout.module.scss'
import { useState, useEffect } from 'react'
import LoginForm from './ui/login/loginForm'
import localFont from 'next/font/local'

const pretendard = localFont({
  src: '../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <html className={pretendard.className}>
      <body className={styles.layoutContainer}>
        {/* {isAuthenticated ? ( */}
        <>
          <Header />
          <div className={styles.headerContainer}>
            <Navbar />
            {children}
          </div>
          <Footer />
        </>
        {/* ) : (
          <LoginForm />
        )} */}
      </body>
    </html>
  )
}
