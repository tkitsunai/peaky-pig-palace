import { PlayerId } from '../domain/player'
import { Card } from '../entity/card'

export interface CardPort {
  setHandCards: (playerId: PlayerId, cards: Card[]) => void
  getAll: () => Card[]
}
