import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Events from './routes/Events/Events';
import Home from './routes/Home/Home';
import Menu from './routes/Menu/Menu';
import NotFound from './routes/NotFound/NotFound';
import Reservations from './routes/Reservations/Reservations';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/events' element={<Events />} />
          <Route path='/reservations' element={<Reservations />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
