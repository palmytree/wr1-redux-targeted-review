import React from 'react';
import './App.css';
import Login from './components/Login'
import Album from './components/Album'

class App extends React.Component {
  render(){
    return (
    <div>
      <h1 className='greeting'> {'I <3 REDUX'} </h1>
      { this.props.user ? <Login/> : <Album/> }
    </div>
    );
  }
}

export default App;
