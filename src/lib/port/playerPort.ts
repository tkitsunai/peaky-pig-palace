import { PlayerId } from '../domain/player'
import { Card } from '../entity/card'

export interface PlayerPort {
  setPlayerHands(player: PlayerId, cards: Card[]): void
}
