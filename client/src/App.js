import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import Nav from './components/Nav'
import GameTile from './components/GameTile'
import FilterTile from './components/FilterTile'
import SortTile from './components/SortTile'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

// query GetGameByIdQuery {
//   game(_id:"5ecc9d5bcc491bc8b315dffc") {
//     name
//     image
//     description
//     release_date
//     platform
//     price
//   }
// }

// TODO get queries working with form fields.

const GET_GAME_BY_ID = gql`
  query GetGameByIdQuery {
    game {
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
      searchParams: {
        name: '',
        platform: '',
        releaseDate: '',
        minPrice: null,
        maxPrice: null
      }
    }

    this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
    this.handleFormChange = this.handleFormChange.bind(this)
  }

  componentDidMount() {
    // Let's just initially get all the games

  }

  handleFormChange(e) {
    console.log(e.target.id)
    this.setState({
      searchParams: {
        ...this.state.searchParams,
        [e.target.id]: e.target.value
      }
    }, () => {
      console.log(this.state)
    })
  }

  handleFilterSubmit(e) {
    e.preventDefault()
    console.log('hello')

    // Here we need to do the filtering
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className='App'>
          <Nav />
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <FilterTile
                  handleFilterSubmit={this.handleFilterSubmit}
                  handleFormChange={this.handleFormChange}
                  searchParams={this.state.searchParams}
                />
                <SortTile />

                <Query query={GET_GAME_BY_ID}>
                  {
                    ({ loading, error, data }) => {
                      if(loading) return <h4>Loading...</h4>
                      if(error) console.log('---error', error)

                      // Very basic atm, but we can work on this
                      return (
                        <React.Fragment>
                          {data.game.map(game => (
                            <GameTile
                              name={game.name}
                              image={game.image}
                              description={game.description}
                              release_date={game.release_date}
                              platform={game.platform}
                              price={game.price}
                            />
                          ))}
                        </React.Fragment>
                      )
                    }
                  }
                </Query>
              </div>
            </div>
          </div>
        </div>
      </ApolloProvider>
    )
  }
}

export default App;
