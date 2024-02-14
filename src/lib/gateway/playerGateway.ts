import { PlayerId } from '../domain/player'
import { Card } from '../entity/card'
import { PlayerPort } from '../port/playerPort'

export function PlayerGateway(): PlayerPort {
  return {
    setPlayerHands: (playerId: PlayerId, cards: Card[]): void => {}
  }
}
