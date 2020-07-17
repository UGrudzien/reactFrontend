import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactFilestack from 'filestack-react';


function App() {
  return (
    <div className="App">
         {/* <div id="inline" ></div> */}
            <ReactFilestack
  apikey="AEP4wtbDSsOlk6YJhoVEAz"
  actionOptions= {{
    maxFiles:10,
  }}
  onSuccess={(res) => console.log(res)}
/>
    </div>
  );
}

export default App;
