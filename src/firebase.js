// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCD2uFnvHXQsNMraJsnofjwmPM62PqEU2s",
  authDomain: "myplannerapp-c1a56.firebaseapp.com",
  projectId: "myplannerapp-c1a56",
  storageBucket: "myplannerapp-c1a56.firebasestorage.app",
  messagingSenderId: "454528992959",
  appId: "1:454528992959:web:d55fc62e3f300504bca80a"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)