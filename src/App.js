import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './Pages'
import A1 from './Pages/A1';
import A2 from './Pages/A2';
import A3 from './Pages/A3';
import A4 from './Pages/A4';
import A5 from './Pages/A5';
import A6 from './Pages/A6';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/article1' component={A1} exact />
        <Route path='/article2' component={A2} exact />
        <Route path='/article3' component={A3} exact />
        <Route path='/article4' component={A4} exact />
        <Route path='/article5' component={A5} exact />
        <Route path='/article6' component={A6} exact />
        <Route path='/article7' component={A1} exact />
        <Route path='/article8' component={A1} exact />
        <Route path='/article9' component={A1} exact />
        <Route path='/article10' component={A1} exact />
      </Switch>
    </Router>
  );
}

export default App;