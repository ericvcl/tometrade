import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDJtk6F8jgG_5OK_P171NhSAaS8r1RE__w",
  authDomain: "project-2-3f7ab.firebaseapp.com",
  projectId: "project-2-3f7ab",
  storageBucket: "project-2-3f7ab.appspot.com",
  messagingSenderId: "213180998416",
  appId: "1:213180998416:web:4509742d3f3262aa9bbb95"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

