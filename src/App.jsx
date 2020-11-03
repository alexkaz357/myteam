import React from 'react';
import { HashRouter as Switch, Route } from 'react-router-dom';
import { Footer } from './cmps/Footer';
import { NavBar } from './cmps/NavBar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route component={Contact} path="/contact" />
        <Route component={About} path="/about" />
        <Route component={Home} path="/" exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;