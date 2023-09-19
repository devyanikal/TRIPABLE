import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

class App extends React.Component{
  state={details: [], }

  componentDidMount(){
    let data;
    axios.get('http://127.0.0.1:8000/explore/')
    .then(res => {
      data=res.data;
      this.setState({
        details: data
      });
    })
    .catch(err => { })
  }
  render(){
    return(
      <div>
        <header>explore place data</header>
        <hr></hr>
        {this.state.details.map((output,id) => (
          <div key={id}>
            <div>
              <h2>{output.place_name}</h2>
            </div>
          </div>
        ))}
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <h1>Explore Places</h1>
//     </div>
//   );
// }

export default App;
