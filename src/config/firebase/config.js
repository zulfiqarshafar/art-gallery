import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// Your app firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSyvdhofI1GAr6WWmOGOrsOpTw6K7mRIA",
  authDomain: "art-gallery-e332a.firebaseapp.com",
  projectId: "art-gallery-e332a",
  storageBucket: "art-gallery-e332a.appspot.com",
  messagingSenderId: "273758994855",
  appId: "1:273758994855:web:72c2528fa9a82d7349b682",
};

// Initialize firebase
const firebaseApp = initializeApp(firebaseConfig);

const projectStorage = getStorage(firebaseApp);
const projectFirestore = getFirestore(firebaseApp);
const timestamp = serverTimestamp();

export { projectStorage, projectFirestore, timestamp };
