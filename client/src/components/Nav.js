import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-primary'>
        <a className='navbar-brand' href='localhost:3000'>Navbar</a>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarColor01' aria-controls='navbarColor01' aria-expanded='true' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='navbar-collapse collapse show' id='navbarColor01'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <a className='nav-link' href='#test1'>Home <span className='sr-only'>(current)</span></a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#test2'>Add Game</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
