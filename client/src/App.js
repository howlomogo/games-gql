import React from 'react';

import Nav from './components/Nav'
import GameTile from './components/GameTile'
import SortTile from './components/SortTile'
function App() {
  return (
    <div className='App'>
    <Nav />
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <h1>Website</h1>
            <SortTile />

            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />
            <GameTile />

          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
