import firebase from 'firebase/app'
import 'firebase/firestore'                                        

// intialize

const db = firebase
    .initializeApp(
        {
            apiKey: "AIzaSyCGhN8CnXm_hA5g3djDtFp3kkRD-vpFrGA",
            authDomain: "letsupgrade-mainpage.firebaseapp.com",
            databaseURL: "https://letsupgrade-mainpage.firebaseio.com",
            projectId: "letsupgrade-mainpage",
            storageBucket: "letsupgrade-mainpage.appspot.com",
            messagingSenderId: "162356566184",
            appId: "1:162356566184:web:1014a975cf402c0c250a9d",
            measurementId: "G-HMCMXXKR2C"
        }
    )
    .firestore()

export default db 

const { TimeStamp } = firebase.firestore
export { TimeStamp }