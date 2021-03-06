import React, { Component } from 'react'

export class SortTile extends Component {
  render() {
    return (
      <div className='d-flex align-items-center py-3 border-top border-bottom mb-3'>
        <div className='flex-fill'>
          <p className='m-0'>
            Showing 5 of 100 results
          </p>
        </div>
        <div className='flex-fill text-right'>
          <div className='dropdown'>
            <button className='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
              Sort By
            </button>
            <div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
              <a className='dropdown-item' href='#3'>Price</a>
              <a className='dropdown-item' href='#1'>Name</a>
              <a className='dropdown-item' href='#2'>Release Date</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SortTile
