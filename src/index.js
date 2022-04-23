import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import './components/App';
import Header from './components/GeneralData';
import GeneralData from './components/GeneralData';
import Education from './components/Education';
import Experience from './components/Experience';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GeneralData />
    <Education />
    <Experience />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
