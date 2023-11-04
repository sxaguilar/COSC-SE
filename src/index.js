// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app'

import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    orderBy, serverTimestamp,
    getDoc,
    updateDoc
  } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAmBeFSSQ_6DILH0DphCWgl0sUGBwb4hQ0",
    authDomain: "cosc-se.firebaseapp.com",
    projectId: "cosc-se",
    storageBucket: "cosc-se.appspot.com",
    messagingSenderId: "150367308881",
    appId: "1:150367308881:web:cc8b32f00a5f0091367c70",
    measurementId: "G-093587W229"
  };

//init firebase app
initializeApp(firebaseConfig)


//init services
const db = getFirestore()

//collection ref
const colRef = collection(db, 'tasks')

// queries
//const q = query(colRef, where("creator", "==", "isabella"), orderBy('title,'desc'))

//real time collection data
onSnapshot(colRef, (snapshot) => {
    let tasks = []
    snapshot.docs.forEach(doc => {
      tasks.push({ ...doc.data(), id: doc.id })
    })
    console.log(tasks)
  })
