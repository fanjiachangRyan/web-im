import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './login'
import Home from './home'

export default class Routers extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isError: false
    }
  }

  componentDidCatch (error, errorInfo) {
    console.log('err->', error, 'errorInfo-->', errorInfo)
    this.setState({
      isError: true
    })
  }

  render () {
    if (this.state.isError) {
      return (
        <div>页面出错了</div>
      )
    }

    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/home' exact component={Home} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    )
  }
}
