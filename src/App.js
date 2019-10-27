import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Search from './components/dashboard/Search'
import Welcome from './components/dashboard/Welcome'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path='/' component={Welcome}/>
          <Route path='/search' component={Search}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;