import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAM200s3VHY5UMEZr-6YiNg4bn1PndylV4",
    authDomain: "movie-now-9cab3.firebaseapp.com",
    projectId: "movie-now-9cab3",
    storageBucket: "movie-now-9cab3.firebasestorage.app",
    messagingSenderId: "233565607958",
    appId: "1:233565607958:web:664b3e00494df96e92fd37"
  };

  const firebase = initializeApp(firebaseConfig);

export default firebase;