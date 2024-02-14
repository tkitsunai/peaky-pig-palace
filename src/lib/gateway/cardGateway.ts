import { PlayerId } from '../domain/player'
import { Card } from '../entity/card'
import { CardPort } from '../port/cardPort'

export function CardGateway(): CardPort {
  return {
    setHandCards: (playerId: PlayerId, cards: Card[]): void => {
      console.log('setHandCards', playerId, cards)
    },
    getAll: (): Card[] => {
      return []
    }
  }
}
