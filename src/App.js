import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portfolio from './components/pages/Porfolio';
// import Classes from './components/pages/Classes';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Dai-website' exact component={Home} />
          <Route path='/portfolio' component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
