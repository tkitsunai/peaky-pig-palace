import { Player, PlayerId } from '../domain/player'
import { Card } from '../entity/card'
import { PlayerPort } from '../port/playerPort'

export type PlayerUsecase = {
  setHandCards(playerId: PlayerId, arg1: Card[]): void
  getPlayers: () => Player[]
}

export type playerUsecaseOptions = {
  playerPort: PlayerPort
}

export function PlayerUsecase(options: playerUsecaseOptions): PlayerUsecase {
  return {
    setHandCards: (playerId: PlayerId, cards: Card[]): void => {
      options.playerPort.setPlayerHands(playerId, cards)
    },
    getPlayers: () => []
  }
}
