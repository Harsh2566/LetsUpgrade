import firebase from 'firebase/app';
import 'firebase/auth';
import db from '../db';

// ____________________SERVICES START____________________


export const fetchServiceById = serviceId =>
    db.collection('services')  
      .doc(serviceId)                 
      .get()
      .then(snapshot => ({id: snapshot.id, ...snapshot.data()}))

export const fetchServices = () => 
    db.collection('services')                   
    .get()
    .then(snapshot => {   
      const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
      return services
    })


export const fetchUserServices = userId => 
  db.collection('services')      
  .where("user", "==", userId)             
  .get()
  .then(snapshot => {   
    const services = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    return services
    })


export const createService = newService => {
  return db
    .collection('services')
    .add(newService)
    .then(docRef => docRef.id)
}

//______________________SERVICES END_______________________

//______________________AUTH START________________________

const createUserProfile = (userProfile) => 
   db.collection('profiles')
    .doc(userProfile.uid) 
    .set(userProfile)


export const register = async ({firstName, lastName, email, password}) => {
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
    const { user } = res
    const userProfile = {uid: user.uid, firstName, lastName, email, services: [], description: ''}
    await createUserProfile(userProfile)
    return userProfile
  } catch(error) {
    return Promise.reject(error.message)
  }
}


export const login = ({email, password}) =>
  firebase.auth().signInWithEmailAndPassword(email, password)
  .catch(error => Promise.reject(error.message))

export const logout = () => firebase.auth().signOut()



export const onAuthStateChanged =  onAuthCallback => firebase.auth().onAuthStateChanged(onAuthCallback)

export const getUserProfile = uid => 
  db.collection('profiles')
    .doc(uid)
    .get()
    .then(snapshot => ({uid, ...snapshot.data()}))