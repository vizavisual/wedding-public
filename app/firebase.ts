import { initializeApp } from "firebase/app";
import {
  getFirestore,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbCPZi2ONOso87CC63W5Zh-ixvv0w_7yY",
  authDomain: "udanganku.firebaseapp.com",
  projectId: "udanganku",
  storageBucket: "udanganku.firebasestorage.app",
  messagingSenderId: "596403568018",
  appId: "1:596403568018:web:6ae3f232e12bd08fb0154b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function sendReservation(
  name: string,
  wish: string,
  presence: string,
  numOfPeople: string | null,
  waktuKehadiran: string | null
) {
  try {
    await addDoc(collection(db, "reservation"), {
      name: name,
      wish: wish,
      presence: presence,
      time: serverTimestamp(),
      numOfPeople: numOfPeople,
      waktuKehadiran: waktuKehadiran,
    });
  } catch (e) {
    alert(e);
  }
}

export { db, sendReservation };
