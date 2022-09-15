import logo from './logo.svg';
import './App.css';
import React from 'react';
import ImageGallery from './components/ImageGallery';


const App = () => {

  return (
    <div>
      <div className='heading'>
        <h1>Car Gallery</h1>
      </div>
      <div>
        <ImageGallery />
      </div>
    </div>
  )
}


export default App;
