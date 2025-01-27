import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAM200s3VHY5UMEZr-6YiNg4bn1PndylV4",
  authDomain: "movie-now-9cab3.firebaseapp.com",
  projectId: "movie-now-9cab3",
  storageBucket: "movie-now-9cab3.firebasestorage.app",
  messagingSenderId: "233565607958",
  appId: "1:233565607958:web:43c180f7a8691c7792fd37"
};
const app = initializeApp(firebaseConfig);

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
