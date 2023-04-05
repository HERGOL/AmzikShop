import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './Pages'
import A1 from './Pages/A1';
import NotFound from './Pages/NotFound';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/article1' component={A1} exact />
        <Route path='/article2' component={A1} exact />
        <Route path='/article3' component={A1} exact />
        <Route path='/article4' component={A1} exact />
        <Route path='/article5' component={A1} exact />
        <Route path='/article6' component={A1} exact />
        <Route path='/article7' component={A1} exact />
        <Route path='/article8' component={A1} exact />
        <Route path='/article9' component={A1} exact />
        <Route path='/article10' component={A1} exact />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;