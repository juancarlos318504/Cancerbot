import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCD0o-xPNhl8EcnrfIdw7Eh1Kcg_w_PvpI",
    authDomain: "cancerbot-50247.firebaseapp.com",
    databaseURL: "https://cancerbot-50247.firebaseio.com",
    projectId: "cancerbot-50247",
    storageBucket: "cancerbot-50247.appspot.com",
    messagingSenderId: "428797307150",
    appId: "1:428797307150:web:9d538a68c5be381f5a4f5f"
};

// Initialize Firebase
var fireDB= firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()
export default fireDB.database(); 
