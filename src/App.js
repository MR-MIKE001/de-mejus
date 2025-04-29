
import { Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/home/Home';

import About from './pages/about/About';
import Fcilities from './pages/facilities/Fcilities';
import Maincontact from './pages/Mainconnact/Maincontact';

function App() {
  
 
  return (
    <div className='app'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/facilities' element={<Fcilities
      />}/>
      <Route path='/contact' element={<Maincontact/>}/>
      <Route path='/about' element={<About/>}/>
      
    </Routes>
  
     
    
    </div>
    
  )
}

export default App;
