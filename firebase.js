// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAD9585IyVTjD06sSZKmfpW5hAwjcMub4g",
    authDomain: "job-portal-e752d.firebaseapp.com",
    projectId: "job-portal-e752d",
    storageBucket: "job-portal-e752d.firebasestorage.app",
    messagingSenderId: "469842599217",
    appId: "1:469842599217:web:922a81606329cfd16c6410"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,
    auth,
}