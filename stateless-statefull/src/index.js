import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HelloComponent from './component/HelloComponent';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PostMahasiswa from "./container/PostMahasiswa/PostMahasiswa"


import Blogspot from "./container/Blogspot/Blogspot";

ReactDOM.render(
  // <Test />,  
  <PostMahasiswa />,  
  document.getElementById('content')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
