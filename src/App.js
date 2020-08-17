import React, { useState } from "react";
import "./App.css";
import ListOfGifs from './components/ListOfGifs'

import {Link,Route} from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>welcome to GIFFY</h1>
        <div className="links">
          <Link to="/gif/ironman">Gifs de ironman</Link>
          <Link to="/gif/spiderman">Gifs de spiderman</Link>
          <Link to="/gif/batman">Gifs de batman</Link>
        </div>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
