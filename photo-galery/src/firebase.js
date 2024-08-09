import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBWk7fjy99OnBEzRfsSVolsSITM1HFFtgQ",
  authDomain: "photo-gallery-71ba2.firebaseapp.com",
  projectId: "photo-gallery-71ba2",
  storageBucket: "photo-gallery-71ba2.appspot.com",
  messagingSenderId: "176784379313",
  appId: "1:176784379313:web:ce3a41a2070a6eb245c190",
  measurementId: "G-66RC80NBEJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { storage };
