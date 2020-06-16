// Just putting this in its own file for simplicity
import React, { Component } from 'react'
import { graphql, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const REMOVE_GAME = gql`
  mutation deleteGame(
    $_id: String
  ) {
    deleteGame(
      _id: $_id
    )
  }
`;

class RemoveBtn extends Component {
  render() {
    return (
      <button
        className='btn btn-danger'
        onClick={(e) => {
          e.preventDefault()
          this.props.mutate({
            variables: {
              _id: this.props._id
            }
          })
        }}
      >
        Remove Game
      </button>
    )
  }
}

// Need this to get the mutate props. (like redux, think this shold be done wih query also?)
// Issue with mutation component not working with refetch so have used the below. see https://github.com/apollographql/apollo-client/issues/3633
export default graphql(REMOVE_GAME, {
    options: {
      refetchQueries: [
        `GetGameByIdQuery`
      ]
    }
  })(RemoveBtn)
