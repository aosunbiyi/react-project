import React from 'react'

import './App.css';



export default class ShoppigList extends React.Component {
  render() {
    return (
      <div className='shopping-list'>
        <h1>
          Shopping list for {this.props.name}
        </h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    )
  }

}

//rafce

