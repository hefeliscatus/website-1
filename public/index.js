import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBWhTe6IdJ2WyICwdYQZH4Y-En8kTOybGM",
  authDomain: "rebornlinuxos.firebaseapp.com",
  projectId: "rebornlinuxos",
  storageBucket: "rebornlinuxos.appspot.com",
  messagingSenderId: "531425075800",
  appId: "1:531425075800:web:dacfee7fd87e78e98b602d",
  measurementId: "G-PMJCVE9K0P"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById("title").innerHTML = "Pick your fckin pc";