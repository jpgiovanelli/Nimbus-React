import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Primeiro_comp from './pages/Primeiro_Comp';
import Segundo_comp from './pages/Segundo_Comp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Listagem } from './components/Listagem/Listagem';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Listagem />}></Route>
        <Route path='segundo' element={<Segundo_comp />}></Route>
        <Route path='primeiro' element={<Primeiro_comp />}></Route>
        <Route path='app' element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
