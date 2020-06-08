import React, { Component } from 'react'

export class FilterTile extends Component {
  render() {
    console.log(this.props.searchParams)
    return (
      <form onSubmit={this.props.handleFilterSubmit} className='form-inline mt-4'>
        <label className='sr-only' htmlFor='nameInput'>Game Name</label>
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          id='name'
          value={this.props.searchParams.name}
          placeholder='Game Name'
          onChange={this.props.handleFormChange}
        />

        <div className='form-group'>
          <label className='sr-only' htmlFor='platformInput'>Platform</label>
          <select
            defaultValue=''
            className='form-control mb-2 mr-sm-2'
            id='platform'
            value={this.props.searchParams.platform}
            onChange={this.props.handleFormChange}
          >
            <option>Platform</option>
            <option>n64</option>
            <option>ps1</option>
            <option>etc</option>
          </select>
        </div>

        <div className='form-group'>
          <label className='sr-only' htmlFor='releaseDateInput'>Release Date</label>
          <select
            defaultValue=''
            className='form-control mb-2 mr-sm-2'
            id='releaseDate'
            value={this.props.searchParams.releaseDate}
            onChange={this.props.handleFormChange}
          >
            <option>Release Date</option>
            <option>1996</option>
            <option>2000</option>
            <option>etc</option>
          </select>
        </div>

        <label className='sr-only' htmlFor='minPriceInput'>Min Price</label>
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          id='minPrice'
          placeholder='Min Price'
          value={this.props.searchParams.minPrice}
          onChange={this.props.handleFormChange}
        />

        <label className='sr-only' htmlFor='maxPriceInput'>Max Price</label>
        <input
          type='text'
          className='form-control mb-2 mr-sm-2'
          id='maxPrice'
          placeholder='Max Price'
          value={this.props.searchParams.maxPrice}
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
