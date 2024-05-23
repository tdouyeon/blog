'use client'
import { Inter } from "next/font/google";
import Header from "../components/header/page";
import Footer from "../components/footer/page";
import Navbar from "../components/navbar/page";
import styles from './layout.module.scss'
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import LoginForm from "../components/login/loginForm";
import { auth } from "../firebase/firebase";



const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <html className={styles.html}>
      <body className={styles.layoutContainer}>
        {isAuthenticated ? (
          <>
            <Header />
            <div className={styles.headerContainer}>
              <Navbar />
              {children}
            </div>
            <Footer />
          </>
        ) : (
          <LoginForm />
        )}
      </body>
    </html>
  );
}
