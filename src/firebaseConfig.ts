// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCGaZoBb7Qhfhy130Uyvf8vVILQm5T48eI",
  authDomain: "jobs-board-platform.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "jobs-board-platform.appspot.com",
  messagingSenderId: "142219855096",
  appId: "1:142219855096:web:c83080a8b435a4e5c7e70d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };