const firebaseConfig = {
  apiKey: "AIzaSyBxXhJVCLA1lgDcqU3KPC5qkKh36QNdyDY",
  authDomain: "longing-for-the-woods.firebaseapp.com",
  projectId: "longing-for-the-woods",
  storageBucket: "longing-for-the-woods.appspot.com",
  messagingSenderId: "537965612643",
  appId: "1:537965612643:web:2b88998a35e10e5a94b256",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true });
