import React from 'react';
import './App.css';
import Values from './component/Values'
import Products from './component/Products'
import Team from './component/Team';
import About from './component/About';
import Contact from './component/Contacts';


function App() {
  return (
    <div className='testing'>
      <About/>
      <Values/>
      <Products/>
      <Team/>
      <Contact/>
      

    </div>
  
  
  );
}

export default App;
