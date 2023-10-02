import './App.css';
import React from 'react';
import ViewPlaces from './Components/ViewPlaces';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ViewHotels from './Components/ViewHotels';

class App extends React.Component{
  render(){
    return(
      <div>
         <BrowserRouter>
        <header>explore place data</header>
        <hr></hr>
        <ul>
          <li>
            <Link to="/places">View Places</Link>
          </li>
          <li>
            <Link to="/hotels">View Hotels</Link>
          </li>
        </ul>
        <br></br>
        <div>
        <Routes>  
          <Route exact path='/places' element={< ViewPlaces />}></Route>  
          <Route exact path='/hotels' element={< ViewHotels />}></Route>  
        </Routes> 
        </div> 
      </BrowserRouter>

      </div>
    )
  }

}

export default App;
