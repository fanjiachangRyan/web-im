import React from 'react'
import cls from './index.module.scss'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className={cls.wrap}>
        home
      </div>
    )
  }
}
