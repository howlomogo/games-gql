import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'

import { Query } from 'react-apollo'

import Nav from './components/Nav'
import GameTile from './components/GameTile'
import FilterTile from './components/FilterTile'
import SortTile from './components/SortTile'
import AddModal from './components/AddModal'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

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

class App extends Component {
  constructor() {
    super()

    this.state = {
      modalVisible: false,
      addInputValues: {
        name: '',
        platform: '',
        releaseYear: 0,
        price: 0.00,
        image: '',
        description: ''
      },
      inputValues: {
        name: '',
        platform: '',
        releaseYear: '',
        price: '',
        image: '',
        description: ''
      },
      searchParams: {
        name: '',
        platform: '',
        releaseDate: '',
        minPrice: '',
        maxPrice: ''
      }
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  handleFormChange(e) {
    console.log(Number(e.target.value).toPrecision(4))
    this.setState({
      inputValues: {
        ...this.state.inputValues,
        [e.target.id]: e.target.id === ('releaseDate' || 'minPrice' || 'maxPrice') ? Number(e.target.value) : e.target.value
      }
    }, () => {
      console.log(this.state)
    })
  }

  // Set searchParams as the inputValues, this will then update the Apollo Query
  handleFilterSubmit(e) {
    e.preventDefault()
    this.setState({
      searchParams: {
        ...this.state.inputValues
      }
    })
  }

  toggleModal() {
		this.setState({ modalVisible: !this.state.modalVisible });
	}

  render() {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <Nav
            toggleModal={this.toggleModal}
          />
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <FilterTile
                  handleFilterSubmit={this.handleFilterSubmit}
                  handleFormChange={this.handleFormChange}
                  inputValues={this.state.inputValues}
                />
                <SortTile />

                <Query
                  query={GET_GAMES}
                  variables={{
                    name: this.state.searchParams.name,
                    release_date: Number(this.state.searchParams.releaseDate),
                    platform: this.state.searchParams.platform,
                    min_price: Number(this.state.searchParams.minPrice),
                    max_price: Number(this.state.searchParams.maxPrice)
                  }}
                >
                  {
                    ({ loading, error, data }) => {
                      if(loading) return <h4>Loading...</h4>
                      if(error) console.log('---error', error)

                      console.log('--data', data)
                      // Very basic atm, but we can work on this
                      return (
                        <React.Fragment>
                        {data &&
                          <React.Fragment>
                          {data.game.map(game => (
                            <GameTile
                              key={game._id}
                              _id={game._id}
                              name={game.name}
                              image={game.image}
                              description={game.description}
                              release_date={game.release_date}
                              platform={game.platform}
                              price={game.price}
                              GET_GAMES={GET_GAMES}
                            />
                          ))}
                          </React.Fragment>
                        }
                        </React.Fragment>
                      )
                    }
                  }
                </Query>
              </div>
            </div>
            <AddModal
              toggleModal={this.toggleModal}
              modalVisible={this.state.modalVisible}
              name={this.state.addInputValues.name}
              image={this.state.addInputValues.image}
              description={this.state.addInputValues.description}
              release_date={this.state.addInputValues.release_date}
              platform={this.state.addInputValues.platform}
              price={this.state.addInputValues.price}
            />
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
