import {
  BrickHouse,
  StrawHouse,
  Wolf,
  WoodenHouse
} from '../domain/playableCard'
import { Card, createCard, FieldCards } from '../entity/card'

export interface FieldPort {
  FindPlayedCard: () => Card[]
}

export interface CardPort {
  getAll: () => Card[]
}

export type CardUsecaseDependencies = {
  cardPort: CardPort
  fieldPort: FieldPort
}

export type CardUsecase = {
  drawCards: () => Card[]
  playHiddenCard: (card: Card) => FieldCards
}

export function CardUsecase(ports: CardUsecaseDependencies): CardUsecase {
  return {
    dealCards: (): Card[] => {
      return [
        createCard('藁の家', '藁で作られた家', StrawHouse),
        createCard('木の家', '木で作られた家', WoodenHouse),
        createCard('レンガの家', 'レンガで作られた家', BrickHouse),
        createCard('オオカミ', '悪いオオカミ', Wolf)
      ]
    },
    playHiddenCard: (card: Card): FieldCards => {
      const fieldCards = ports.fieldPort.FindPlayedCard()
      fieldCards.push(card)
      return fieldCards
    }
  }
}
