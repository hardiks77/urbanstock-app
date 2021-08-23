import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4cMIOrIdxxEAiI7aU8scNHDCfOGh2EaA",
    authDomain: "urban-stock-app.firebaseapp.com",
    projectId: "urban-stock-app",
    storageBucket: "urban-stock-app.appspot.com",
    messagingSenderId: "300063720392",
    appId: "1:300063720392:web:4ee61facfa89958d2636fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;