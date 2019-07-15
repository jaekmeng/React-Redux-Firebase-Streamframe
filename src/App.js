import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Mainboard from './components/mainboard/Mainboard'
import CreateTask from './components/tasks/CreateTask'

//Main app setting route paths for components.
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Mainboard} />
          <Route path='/create' component={CreateTask} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
