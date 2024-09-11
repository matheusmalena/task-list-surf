// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Importa a função para autenticação
import { getFirestore } from 'firebase/firestore'; // Importa a função para Firestore, se você planeja usar o banco de dados

// Configurações do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfFfMTxsf9SewWWwPc8Ndtt7xWKAoXWDQ",
  authDomain: "task-list-surf.firebaseapp.com",
  projectId: "task-list-surf",
  storageBucket: "task-list-surf.appspot.com",
  messagingSenderId: "1061372672004",
  appId: "1:1061372672004:web:5a5ec50caafe52aea05d51",
  measurementId: "G-0NFQPFHHDL"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Configura a autenticação
const db = getFirestore(app); // Configura o Firestore, se necessário

export { auth, db }; // Exporta as instâncias para uso no aplicativo
