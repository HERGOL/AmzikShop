import React from 'react';
import styles from "./App.module.css"
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './Pages'
import A1 from './Pages/A1';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/article1' component={A1} exact />
      </Switch>
    </Router>
  );
}

export default App;