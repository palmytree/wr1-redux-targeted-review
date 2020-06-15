import React from 'react';
import './App.css';
import Login from './components/Login'
import Album from './components/Album'
import {Link, Switch, Route} from 'react-router-dom';

class App extends React.Component {


  render(){
    return (
    <div>
      <h1 className='greeting'> {'I <3 REDUX'} </h1>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/album" component={Album}/>
        </Switch>
      <Link to='/'>
      <button 
        className='logout-button'>
        Logout
      </button>
      </Link>
    </div>
    );
  }
}

export default App;
