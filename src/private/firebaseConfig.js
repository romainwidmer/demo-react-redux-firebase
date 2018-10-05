import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDCFILROfTdRrtNJxZ-bYFmiQYjaUR_8Rg",
  authDomain: "fir-demo-react-redux-firebase.firebaseapp.com",
  databaseURL: "https://fir-demo-react-redux-firebase.firebaseio.com",
  projectId: "fir-demo-react-redux-firebase",
  storageBucket: "fir-demo-react-redux-firebase.appspot.com",
  messagingSenderId: "741506395365"
};

firebase.initializeApp(config)
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
