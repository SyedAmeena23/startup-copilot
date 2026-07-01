import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6ToWEyl1KeW7JBwb1dlCm7msBGyQZIck",
  authDomain: "startup-copilot-4fc54.firebaseapp.com",
  projectId: "startup-copilot-4fc54",
  storageBucket: "startup-copilot-4fc54.firebasestorage.app",
  messagingSenderId: "396127464885",
  appId: "1:396127464885:web:fe0f6495a10784963efdfc",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();