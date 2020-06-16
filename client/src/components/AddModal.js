import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import GameOptions from '../helpers/gameOptions.json'
import { graphql, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const INSERT_GAME = gql`
  mutation insertGame(
    $name: String,
    $price: Float,
    $platform: String,
    $release_date: Int,
    $description: String,
    $image: String
  ) {
    insertGame(
      name: $name
      price: $price,
      platform: $platform,
      release_date: $release_date,
      description: $description,
      image: $image
    )
  }
`;

class AddModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      amendToggled: false,
      addInputValues: {
        name: props.name,
        platform: props.platform,
        releaseYear: props.releaseYear,
        price: props.price,
        image: props.image,
        description: props.description
      }
    }
    this.toggleAmend = this.toggleAmend.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  toggleAmend() {
    this.setState({
      amendToggled: !this.state.amendToggled
    })
  }

  handleFormChange(e) {
    console.log(e.target.value)
    console.log(e.target.id)
    this.setState({
      addInputValues: {
        ...this.state.addInputValues,
        [e.target.id]: ((e.target.id === 'releaseYear') || (e.target.id === 'price')) ? Number(e.target.value) : e.target.value
      }
    }, () => {
      console.log(this.state)
    })
  }

  render() {
    return (
          <Modal show={this.props.modalVisible} onHide={this.props.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                Add New Game
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                  <form>
                    <div className='form-group'>
                      <label htmlFor='nameInput'>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={this.state.addInputValues.name}
                        onChange={this.handleFormChange}
                        placeholder='Super Mario' />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='imageInput'>Image</label>
                      <input
                        type='text'
                        className='form-control'
                        id='image'
                        value={this.state.addInputValues.image}
                        onChange={this.handleFormChange}
                        placeholder='Enter boxart url' />
                    </div>

                    <div className='form-group'>
                      <label htmlFor='priceInput'>Price</label>
                      <input
                        type='number'
                        className='form-control'
                        value={this.state.addInputValues.price}
                        onChange={this.handleFormChange}
                        id='price' />
                    </div>

                    <div className="form-group">
                      <label htmlFor='platformInput'>Release Year</label>
                      <select
                        className="form-control"
                        id="releaseYear"
                        value={this.state.addInputValues.releaseYear}
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
                        value={this.state.addInputValues.platform}
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
                      value={this.state.addInputValues.description}
                      onChange={this.handleFormChange}
                      rows='3' />
                    </div>
                  </form>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.props.toggleModal} className='btn btn-secondary'>
                Close
              </button>

              <button
                className='btn btn-primary'
                onClick={(e) => {
                  e.preventDefault()
                  this.props.toggleModal()
                  this.props.mutate({
                    variables: {
                      name: this.state.addInputValues.name,
                      price: this.state.addInputValues.price,
                      image: this.state.addInputValues.image,
                      description: this.state.addInputValues.description,
                      platform: this.state.addInputValues.platform,
                      release_date: this.state.addInputValues.releaseYear
                    }
                  })
                }}
              >
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>
    )
  }
}

// Need this to get the mutate props. (like redux, think this shold be done wih query also?)
// Issue with mutation component not working with refetch so have used the below. see https://github.com/apollographql/apollo-client/issues/3633
export default graphql(INSERT_GAME, {
    options: {
      refetchQueries: [
        `GetGameByIdQuery`
      ]
    }
  })(AddModal)
