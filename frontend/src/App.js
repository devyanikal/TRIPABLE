import './App.css';
import React from 'react';
import ViewPlaces from './Components/ViewPlaces';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ViewHotels from './Components/ViewHotels';
import { useState} from 'react';

function App(){
  const [value, setValue] = useState("");
  const [disablity, setDisability] = useState("");
  function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
  }
    return(
      <div>
        <BrowserRouter>

        <div class="col-9"><h1>TRIPABLE</h1>
        <div class="col-2">
          <label for="places"><h5>Choose city:</h5></label>
            <select value={value} onChange={(event)=>{setValue(event.target.value)}} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" >
              <option value="">ALL</option>
              <option value="Manali">Manali</option>
              <option value="Udaipur">Udaipur</option>
            </select>  
          <label for="disablity"><h5>Choose filter:</h5></label>
          <select value={disablity} onChange={(event)=>{setDisability(event.target.value)}} class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
              <option value="">ALL</option>
              <option value="wu">Wheelchair user</option>
              <option value="vi">Visual Impaired</option>
              <option value="hi">Hearing Impaired </option>
              <option value="si">Speech Impaired</option>
          </select>  
        </div>
        </div>
        <hr></hr>
          <Link to="/places" className="btn btn-outline-primary">Explore Places</Link>&emsp;
          <Link to="/hotels" className="btn btn-outline-primary">View Hotels</Link>
        <br></br>
        <div>
        <Routes>  
          <Route exact path='/places' element={< ViewPlaces place={value} disablity={disablity} />}></Route>  
          <Route exact path='/hotels' element={< ViewHotels />}></Route>  
        </Routes> 
        </div> 
      </BrowserRouter>

      </div>
    )

}

export default App;
