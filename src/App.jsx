import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react=firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks";

firebase.initializeApp({
  apiKey: "AIzaSyA7S8w2fXYlaQOwAyf571ljCBuwhEB24P8",
  authDomain: "chat-room-9d8e8.firebaseapp.com",
  projectId: "chat-room-9d8e8",
  storageBucket: "chat-room-9d8e8.appspot.com",
  messagingSenderId: "476620913435",
  appId: "1:476620913435:web:5e81604477663f6acb71be",
  measurementId: "G-BMJ258R87S",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="app">
      <header></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
