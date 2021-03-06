import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Components/header';
import Services from './Components/services';
import About from './Components/about';
import Contact from './Components/contato';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    <Services />
    <Contact/>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
