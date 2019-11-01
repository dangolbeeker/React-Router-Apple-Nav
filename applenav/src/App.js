import React from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';
import Mac from './components/Mac';


function App() {
  return (
    <div className="App">
     <Nav />
     <Route exact path="/Mac" component={Mac}/>
    </div>
  );
}

export default App;
