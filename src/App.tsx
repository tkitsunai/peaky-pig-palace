import React, { useState, useEffect } from 'react'

// Define card types
enum CardType {
  Wolf = 'Wolf',
  StrawHouse = 'Straw House',
  WoodHouse = 'Wood House',
  BrickHouse = 'Brick House'
}

// Define Player interface
interface Player {
  id: number
  name: string
  cards: CardType[]
  pigs: number
}

const App: React.FC = () => {
  // Initialize game state
  const [gameState, setGameState] = useState({
    players: [] as Player[],
    currentPlayerIndex: 0,
    phase: 'Preparation'
  })

  // Function to initialize the game
  const initializeGame = (numPlayers: number) => {
    const players: Player[] = []
    for (let i = 0; i < numPlayers; i++) {
      players.push({
        id: i + 1,
        name: `Player ${i + 1}`,
        cards: Object.values(CardType),
        pigs: 5 // Starting with 5 pigs per player
      })
    }
    setGameState((prevState) => ({
      ...prevState,
      players,
      phase: 'Building'
    }))
  }

  // useEffect to initialize the game on component mount
  useEffect(() => {
    initializeGame(4)
  }, [])

  // Render the game UI
  return (
    <div>
      <h1>Peaky Pig Palace</h1>
      <div>
        {gameState.players.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <p>Cards: {player.cards.join(', ')}</p>
            <p>Pigs: {player.pigs}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
