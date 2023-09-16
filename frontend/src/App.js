// frontend/src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './views/Navbar';  // Make sure to import Navbar here
import Generator from './views/Generator';
import CXSim from './views/CXSim';
import ArgumentAnalysis from './views/ArgumentAnalysis';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />  {/* Include the Navbar component */}
        <Switch>
          <Route path="/generator" component={Generator} />
          <Route path="/cxsim" component={CXSim} />
          <Route path="/analysis" component={ArgumentAnalysis} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
