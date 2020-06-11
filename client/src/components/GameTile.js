import React, { Component } from 'react'
import AmendForm from './AmendForm'

class GameTile extends Component {
  constructor() {
    super()

    this.state = {
      amendToggled: false
    }
    this.toggleAmend = this.toggleAmend.bind(this)
  }

  toggleAmend() {
    this.setState({
      amendToggled: !this.state.amendToggled
    })
  }

  render() {
    return (
      <div className='card flex-row flex-wrap mb-3'>
        <div className='card-header border-0'>
          <img src={this.props.image} width='150px' height='150px' alt=''/>
        </div>
        <div className='card-block flex-fill p-3'>
          <h4 className='card-title'>{this.props.name}</h4>
          <hr />
          <p className='mb-2'><strong>Release Date:</strong> {this.props.release_date} | <strong>Platform:</strong> {this.props.platform}</p>
          <p className='mb-2'><strong>Price:</strong> £{this.props.price}</p>
          <a href='#1'>More Info</a>
        </div>
        <div className='w-100'></div>
        <div className='card-footer w-100 text-muted'>
          {this.state.amendToggled ? (
            <AmendForm
              _id={this.props._id}
              name={this.props.name}
              image={this.props.image}
              description={this.props.description}
              release_date={this.props.release_date}
              platform={this.props.platform}
              price={this.props.price}
            />
          ) : (
            <div className='d-flex align-items-center'>
              <div className='flex-fill'>
                <p className='m-0'>Moderator Area</p>
              </div>
              <div className='flex-fill text-right'>
                <a href='#1' className='btn btn-primary mr-2' onClick={() => {this.toggleAmend()}}>Amend Game</a>
                <a href='#2' className='btn btn-danger'>Remove Game</a>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default GameTile
