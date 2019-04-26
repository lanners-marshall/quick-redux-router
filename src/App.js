import React from 'react';
import './App.css';
import Joke from './components/Joke.js';
import Kanye from './components/Kanye.js';
import Home from './components/Home.js';
import Links from './components/Links.js';
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      	<Links />
			  <Route exact path="/" component={Home} />
				<Route path="/joke" component={Joke} />
				<Route path="/quote" component={Kanye} />
      </header>
    </div>
  );
}

export default App;
