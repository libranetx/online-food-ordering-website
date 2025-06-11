import React , { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './navigation/NavigationBar';
import Footer from './navigation/Footer';

import Home from './pages/Home';
import AboutUs from './pages/About';
import Order from './pages/OrderPage';
import ContactUs from './pages/ContactUs';
import CustemerFeedback from './pages/CustemerFeedback';




function App() {
    const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  return (
   <div className='App'>   
    <BrowserRouter>
      <NavigationBar/>
      <div className="main" style={{flex:1}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route 
              path='/order' 
              element={<Order cart={cart} onAddToCart={handleAddToCart} />} 
            />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/custemerfeedback' element={<CustemerFeedback />} />
            <Route path='/contactus' element={<ContactUs />} />
          </Routes>
    </div>
    <Footer style={{flexShrink: 0 }}/>
    </BrowserRouter>
</div>
  );
}

export default App;
