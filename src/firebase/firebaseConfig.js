import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAWtfujpPSa7fzfyHYjOJqOLVlmVQsMPfE',
  authDomain: 'task-manager-d45d3.firebaseapp.com',
  projectId: 'task-manager-d45d3',
  storageBucket: 'task-manager-d45d3.appspot.com',
  messagingSenderId: '875822293690',
  appId: '1:875822293690:web:5506f4c06090238bb4d883',
  measurementId: 'G-MPEHDR9122',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
