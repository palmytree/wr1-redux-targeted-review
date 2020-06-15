import React from 'react';
import './App.css';
import Login from './components/Login'
import Album from './components/Album'
import {Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux'
import {logoutUser, getUser} from './redux/authReducer'
import {Link} from 'react-router-dom'

class App extends React.Component {
  
  componentDidMount(){
    this.props.getUser()
  }

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
        className='logout-button' 
        onClick={() => {this.props.logoutUser()}}>
        Logout
      </button>
      </Link>
    </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, {logoutUser, getUser})(App);
