import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCOz37oWoa5baBJ4LK4SxJoLf8SYtoaS0k',
  authDomain: 'crwn-db1.firebaseapp.com',
  databaseURL: 'https://crwn-db1.firebaseio.com',
  projectId: 'crwn-db1',
  storageBucket: '',
  messagingSenderId: '631631248660',
  appId: '1:631631248660:web:a2d98008df14e1d4'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
