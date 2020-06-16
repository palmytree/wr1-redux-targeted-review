import React from 'react'
import './App.css'
import Login from './components/Login'
import Album from './components/Album'
import axios from 'axios'
import { Link, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser, getUser } from './redux/authReducer'

class App extends React.Component {
  logout = () => {
    axios.delete('/auth/logout').then(() => {
      this.props.logoutUser()
    })
  }
  componentDidMount(){
    this.props.getUser()
  }
  render() {
    return (
      <div>
        <h1 className='greeting'> {'I <3 REDUX'} </h1>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/album' component={Album} />
        </Switch>
        <Link to='/'>
          <button className='logout-button' onClick={this.logout}>
            Logout
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { logoutUser, getUser })(App)
