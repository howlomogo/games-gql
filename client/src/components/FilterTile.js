import React, { Component } from 'react'
import GameOptions from '../helpers/gameOptions.json'

class FilterTile extends Component {
  render() {
    console.log(this.props.inputValues)
    return (
      <form onSubmit={this.props.handleFilterSubmit} className='form-inline mt-4'>
        <label className='sr-only' htmlFor='nameInput'>Game Name</label>
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          id='name'
          value={this.props.inputValues.name}
          placeholder='Game Name'
          onChange={this.props.handleFormChange}
        />

        <div className='form-group'>
          <label className='sr-only' htmlFor='platformInput'>Platform</label>
          <select
            defaultValue=''
            className='form-control mb-2 mr-sm-2'
            id='platform'
            value={this.props.inputValues.platform}
            onChange={this.props.handleFormChange}
          >
            <option value=''>Platform</option>
            {GameOptions.platformTypes.map(platform => {
              return (
                <option key={platform} value={platform}>{platform}</option>
              )
            })}
          </select>
        </div>

        <div className='form-group'>
          <label className='sr-only' htmlFor='releaseDateInput'>Release Date</label>
          <select
            defaultValue=''
            className='form-control mb-2 mr-sm-2'
            id='releaseDate'
            value={this.props.inputValues.releaseDate}
            onChange={this.props.handleFormChange}
          >
            <option value=''>Release Date</option>
            {GameOptions.releaseYears.map(year => {
              return (
                <option key={year} value={year}>{year}</option>
              )
            })}
          </select>
        </div>

        <label className='sr-only' htmlFor='minPriceInput'>Min Price</label>
        <input
          type='number'
          className='form-control mb-2 mr-sm-2'
          id='minPrice'
          placeholder='Min Price'
          value={this.props.inputValues.minPrice}
          onChange={this.props.handleFormChange}
        />

        <label className='sr-only' htmlFor='maxPriceInput'>Max Price</label>
        <input
          type='number'
          className='form-control mb-2 mr-sm-2'
          id='maxPrice'
          placeholder='Max Price'
          value={this.props.inputValues.maxPrice}
          onChange={this.props.handleFormChange}
        />

        <button
          type='submit'
          className='btn btn-primary mb-2'>
          Search
        </button>
      </form>
    )
  }
}

export default FilterTile
