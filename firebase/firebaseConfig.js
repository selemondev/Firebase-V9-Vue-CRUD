
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyChbgVpj5VyGjdCXEiKz72P6tO7dIheP9k",
  authDomain: "vue-firebase-d1f41.firebaseapp.com",
  projectId: "vue-firebase-d1f41",
  storageBucket: "vue-firebase-d1f41.appspot.com",
  messagingSenderId: "68765761231",
  appId: "1:68765761231:web:a9afc5f1e168b943fd01ba"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}