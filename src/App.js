import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from '../src/pages/Home';
import Services from './pages/Services';
import Products from './pages/product';
import Signup from './pages/Signup';

function App() {
  return (
    <>
    <Router>
       <Navbar />
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/services" exact component={Services} />
         <Route path="/produts" exact component={Products} />
         <Route path="/sign-up" exact component={Signup} />
       </Switch>
    </Router>
      
    </>
  );
}

export default App;
