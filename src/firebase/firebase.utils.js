import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDvYERdxgXwETEg6U6DYHWeYaTl-hb4OrI',
	authDomain: 'crown-db-bd020.firebaseapp.com',
	databaseURL: 'https://crown-db-bd020.firebaseio.com',
	projectId: 'crown-db-bd020',
	storageBucket: 'crown-db-bd020.appspot.com',
	messagingSenderId: '664456137725',
	appId: '1:664456137725:web:bcc2f4d919eacf4b06a794',
	measurementId: 'G-Z8ZL5GYPE4'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
