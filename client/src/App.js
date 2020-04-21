import React, { useState, useEffect } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/players')
      .then(res => {
        console.log('res:', res)
        setPlayers(res.data)
      })
      .catch(err => console.log('error', err))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Womens Soccer World Cup!</h1>
        {players.map(player => (
          <div className="player-card">
            <div>name: {player.name}</div>
            <div>country: {player.country}</div>
            <div>searches: {player.searches}</div>
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
