import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import amplifyconfig from './amplifyconfiguration.json';
import { Config } from './aws-exports';
import { generateClient } from 'aws-amplify/api';
import Amplify from 'aws-amplify';

Amplify.configure(amplifyconfig);
Amplify.configure(Config) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
