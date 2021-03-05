import React from 'react';
import './app.css';
import Song from './Song.js';
function App() {
  let i=0;
  const forward=()=>{
    i++;
    return i;
  }
  const backward=()=>{
    i--;
    return i;
  }
  
  
return (
<>
  <div className="container">
    <h1 className="heading">iTunes <i className="fa fa-music"></i></h1>
    <Song 
    forward={forward}
    backward={backward}
    />
    
  </div>
</>
);
}

export default App;