
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDSJ4DeDcRt6LpZEUQImBya1Goe33mHeMU",
  authDomain: "calc-5cb7d.firebaseapp.com",
  projectId: "calc-5cb7d",
  storageBucket: "calc-5cb7d.appspot.com",
  messagingSenderId: "231465171343",
  appId: "1:231465171343:web:505673f4ba52e9335bb3fa"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
