import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { LogIn } from './LogIn';
import { Privacy } from './components/Privacy';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/logIn" element={<LogIn />} />
      <Route path="/privacy" element={<Privacy />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
