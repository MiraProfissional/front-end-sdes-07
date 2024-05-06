import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './templates/Home';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Products from './templates/Products';
import Navbar from './components/Navbar';
import NotFound from './templates/NotFound';
import Login from './templates/Login';
import './index.css'
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/produtos' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);

