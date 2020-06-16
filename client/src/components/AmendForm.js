import React, { Component } from 'react'
import GameOptions from '../helpers/gameOptions.json'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const UPDATE_GAME = gql`
  mutation updateGame(
    $_id: String!,
    $name: String,
    $price: Float,
    $image: String,
    $description: String,
    $platform: String,
    $release_date: Int
  ) {
    updateGame(
      _id: $_id,
      name: $name
      price: $price,
      image: $image,
      description: $description,
      platform: $platform,
      release_date: $release_date
    )
  }
`;

// Just use to refetch the games after the mutation, we dont really need all this as can do it by id but this is fine for now.
const GET_GAMES = gql`
  query GetGameByIdQuery(
    $name: String,
    $release_date: Int,
    $platform: String,
    $min_price: Float,
    $max_price: Float
  ) {
    game(
      name: $name,
      release_date: $release_date,
      platform: $platform,
      min_price: $min_price,
      max_price: $max_price
    ) {
      _id
      name
      image
      description
      release_date
      platform
      price
    }
  }
`;

class AmendForm extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      inputValues: {
        name: props.name,
        platform: props.platform,
        releaseYear: props.release_date,
        price: props.price,
        image: props.image,
        description: props.description
      }
    }
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(e) {
    console.log(e.target.value)
    console.log(e.target.id)
    this.setState({
      inputValues: {
        ...this.state.inputValues,
        [e.target.id]: ((e.target.id === 'releaseYear') || (e.target.id === 'price')) ? Number(e.target.value) : e.target.value
      }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
      <Mutation mutation={UPDATE_GAME}>
        {(updateGame, {data}) => (
          <form>
            <div className='form-group'>
              <label htmlFor='nameInput'>Name</label>
              <input
                type='text'
                className='form-control'
                id='name'
                value={this.state.inputValues.name}
                onChange={this.handleFormChange}
                placeholder='Super Mario' />
            </div>

            <div className='form-group'>
              <label htmlFor='imageInput'>Image</label>
              <input
                type='text'
                className='form-control'
                id='image'
                value={this.state.inputValues.image}
                onChange={this.handleFormChange}
                placeholder='Enter boxart url' />
            </div>

            <div className='form-group'>
              <label htmlFor='priceInput'>Price</label>
              <input
                type='number'
                className='form-control'
                value={this.state.inputValues.price}
                onChange={this.handleFormChange}
                id='price' />
            </div>

            <div className="form-group">
              <label htmlFor='platformInput'>Release Year</label>
              <select
                className="form-control"
                id="releaseYear"
                value={this.state.inputValues.releaseYear}
                onChange={this.handleFormChange}
              >
                {GameOptions.releaseYears.map(year => {
                  return (
                    <option key={year} value={year}>{year}</option>
                  )
                })}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor='platformInput'>Platform</label>
              <select
                className="form-control"
                id="platform"
                value={this.state.inputValues.platform}
                onChange={this.handleFormChange}
              >
                {GameOptions.platformTypes.map(platform => {
                  return (
                    <option key={platform} value={platform}>{platform}</option>
                  )
                })}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='descriptionInput'>Description</label>
              <textarea
              className='form-control'
              id='description'
              value={this.state.inputValues.description}
              onChange={this.handleFormChange}
              rows='3' />
            </div>
            <button
              type='submit'
              className='btn btn-primary my-1'
              onClick={(e) => {
                e.preventDefault()
                updateGame({
                  variables: {
                    _id: this.props._id,
                    name: this.state.inputValues.name,
                    price: this.state.inputValues.price,
                    image: this.state.inputValues.image,
                    description: this.state.inputValues.description,
                    platform: this.state.inputValues.platform,
                    release_date: this.state.inputValues.releaseYear
                  }
                })
              }}
            >
              Update Game Details
            </button>
          </form>
        )}
      </Mutation>
    )
  }
}

export default AmendForm
