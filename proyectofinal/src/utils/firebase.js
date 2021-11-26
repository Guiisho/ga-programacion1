import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import {getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDfjZIkqTB3Mn-H8SUPhmjju70nRqXj-Yc",
    authDomain: "cet30-199b8.firebaseapp.com",
    projectId: "cet30-199b8",
    storageBucket: "cet30-199b8.appspot.com",
    messagingSenderId: "314223854327",
    appId: "1:314223854327:web:fbb0b25d337d87314549f2",
    measurementId: "G-XYFR5L1XQV"
  };

  //Esto inicia la conexión con Firebase
  const app= initializeApp(firebaseConfig)

  //Iniciamos conexión con el servicio de Firestore
  const db= getFirestore()

  //Obtenemos acceso al servicio de Storage, guardándolo en una constante "storage" y luego en una "app" para su ejecución.
  const storage= getStorage(app)
  const auth= getAuth()


  export {db, storage, auth };