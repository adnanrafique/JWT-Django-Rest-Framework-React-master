// frontend/src/App.js

import React, {useContext, useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './views/Navbar';  // Make sure to import Navbar here
import Generator from './views/Generator';
import CXSim from './views/CXSim';
import ArgumentAnalysis from './views/ArgumentAnalysis';

import Loginpage from './views/Loginpage';
import Registerpage from './views/Registerpage';
import { AuthProvider } from './context/AuthContext';
import AuthContext from './context/AuthContext';


function App() {

  // const {user} = AuthContext


  return (
    <AuthProvider>
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/generator" component={Generator} />
          <Route path="/cxsim" component={CXSim} />
          <Route path="/analysis" component={ArgumentAnalysis} />

          <Route path="/login" component={Loginpage} />
          <Route path="/register" component={Registerpage} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
