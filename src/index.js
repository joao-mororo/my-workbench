import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';

import './fonts/YesevaOne/YesevaOne-Regular.ttf';

import App from './App';
import Home from './pages/Home';
import Notepad from './pages/Notepad';
import Calculator from './pages/Calculator'
import ToDo from './pages/ToDo'
import ChatGPT from './pages/ChatGPT'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='notepad' element={<Notepad />} />
          <Route path='calculator' element={<Calculator />} />
          <Route path='todo' element={<ToDo />} />
          <Route path='chatgpt' element={<ChatGPT />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

