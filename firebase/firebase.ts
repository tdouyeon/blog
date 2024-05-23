// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    console.log('Login successful:', user)
    return user
  } catch (error) {
    alert(`Login failed:, ${error}`)
    throw error // Rethrow the error so that the caller can handle it
  }
}

export const signup = async ({ email, password }: { email: string; password: string }) => {
  const { user } = await createUserWithEmailAndPassword(auth, email, password)
  return user
}
