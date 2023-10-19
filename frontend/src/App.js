import './App.css';
import React from 'react';
import Contactus from './Components/Contactus/Contactus';
import ViewPlaces from './Components/pages/ViewPlaces';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contactus from './Components/Contactus/Contactus';
import ViewHotels from './Components/pages/ViewHotels';
import Home from './Components/pages/Home';
import Navbar from './Components/Navbar'
import About from './Components/pages/About';
import SignUp from './Components/pages/SignUp';
import PlaceDetails from './Components/pages/PlaceDetails';
import HotelDetails from './Components/pages/HotelDetails';
// import ReactPlayer from 'react-player'

function App(){
    return(
      <div>
         <BrowserRouter>

         <Navbar/>
         {/* <ReactPlayer url={'./travelvideo.mp4'} controls={false} playing={true} /> */}

        <div>
        <Routes>  
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/about' element={< About />}></Route>
          <Route exact path='/places' element={< ViewPlaces />}></Route>  
          <Route exact path='/hotels' element={< ViewHotels />}></Route> 
          <Route exact path='/signup' element={< SignUp />}></Route> 
          <Route exact path='/places/:pid' element={<PlaceDetails/>}></Route>
          <Route exact path='/hotels/:hid' element={<HotelDetails/>}></Route>
        </Routes>
        <footer>
        <Contactus/> 
        </footer>

        </div> 
      </BrowserRouter>

      </div>
    )

}

export default App;
