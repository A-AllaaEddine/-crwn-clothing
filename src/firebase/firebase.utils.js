import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {

    apiKey: "AIzaSyA_FshCdmOuAR_OdKt5jYUDSmfpBKO5XW8",
  
    authDomain: "crwn-db-e49db.firebaseapp.com",
  
    projectId: "crwn-db-e49db",
  
    storageBucket: "crwn-db-e49db.appspot.com",
  
    messagingSenderId: "488232048173",
  
    appId: "1:488232048173:web:efe774e7cebbb686444aa4",
  
    measurementId: "G-VEEHDZF52Z"
  
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const  snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocref = collectionRef.doc();
    batch.set(newDocref, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}



export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;