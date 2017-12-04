import React, { Component } from 'react'
import Ideas from './ideas/Ideas'

class Main extends Component {
  render() {
    return (
      <div>
        <Ideas />
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    )
  }
}

export default Main
