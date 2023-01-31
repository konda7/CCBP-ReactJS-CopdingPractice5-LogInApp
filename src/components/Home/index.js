// Write your code here

import './index.css'
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: true}

  onClickEvent = () => {
    const {isLogin} = this.state

    if (isLogin === true) {
      this.setState(() => ({
        isLogin: false,
      }))
    } else {
      this.setState(() => ({
        isLogin: true,
      }))
    }
  }

  render() {
    const {isLogin} = this.state
    return (
      <div className="bg-container">
        <div className="content-conatiner">
          <Message isLoggedin={isLogin} className="description" />
          {isLogin ? (
            <Login className="btn" onClick={this.onClickEvent} />
          ) : (
            <Logout className="btn" onClick={this.onClickEvent} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
