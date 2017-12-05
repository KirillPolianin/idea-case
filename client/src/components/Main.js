import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Ideas from './ideas/Ideas'

class Main extends Component {
  render() {
    return (
      <div>
        <Ideas />
        <div className="fixed-action-btn">
          <Link to="/ideas/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Main
