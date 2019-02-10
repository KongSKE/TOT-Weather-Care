import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAlj0-SMvp3GEitDE0Y9AIvxQGFIvlEDtQ",
    authDomain: "tot-hackathon-2019.firebaseapp.com",
    databaseURL: "https://tot-hackathon-2019.firebaseio.com",
    projectId: "tot-hackathon-2019",
    storageBucket: "",
    messagingSenderId: "211980901653"   
};
firebase.initializeApp(config);

export default firebase;