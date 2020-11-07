import React from 'react'
import cls from './index.module.scss'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={cls.wrap}>
        login
      </div>
    )
  }
}
