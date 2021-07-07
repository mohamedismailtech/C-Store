import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWBCPc4telwGn4mMeEkeFOddS58eVo1R4",
  authDomain: "c-store-83e37.firebaseapp.com",
  databaseURL: "https://c-store-83e37.firebaseio.com",
  projectId: "c-store-83e37",
  storageBucket: "c-store-83e37.appspot.com",
  messagingSenderId: "594813424852",
  appId: "1:594813424852:web:fd55dde3858dd714c55741",
  measurementId: "G-49HYGM9D3G"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase