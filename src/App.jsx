import React from 'react'
import { Button } from './components/ui/button';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App;