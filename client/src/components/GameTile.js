import React, { Component } from 'react'

export class GameTile extends Component {
  render() {
    return (
      <div className='card flex-row flex-wrap mb-3'>
        <div className='card-header border-0'>
          <img src='https://uk.static.webuy.com/product_images/Gaming/Playstation1%20Software/SPS1G1380B_l.jpg' width='150px' height='150px' />
        </div>
        <div className='card-block flex-fill p-3'>
          <h4 className='card-title'>Final Fantasy 7</h4>
          <hr />
          <p className='mb-2'><strong>Release Date:</strong> 1997 | <strong>Platform:</strong> PS1</p>
          <p className='mb-2'><strong>Price:</strong> £50</p>
          <a href='#'>More Info</a>
        </div>
        <div className='w-100'></div>
        <div className='card-footer w-100 text-muted'>
          <div className='d-flex align-items-center'>
            <div className='flex-fill'>
              <p className='m-0'>Moderator Area</p>
            </div>
            <div className='flex-fill text-right'>
              <a href='#' className='btn btn-primary mr-2'>Amend Game</a>
              <a href='#' className='btn btn-danger'>Remove Game</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GameTile
