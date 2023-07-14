import React, { Component } from 'react'
import giphy from './giphy.gif';
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={giphy} alt="giphy" />
      </div>
    )
  }
}
