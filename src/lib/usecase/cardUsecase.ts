import {
  BrickHouse,
  StrawHouse,
  Wolf,
  WoodenHouse
} from '../domain/playableCard'
import { Card, FieldCards } from '../entity/card'
import { CardPort } from '../port/cardPort'
import { FieldPort } from '../port/fieldPort'

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
    drawCards: (): Card[] => {
      return [
        {
          name: '藁の家',
          description: '藁で作られた家',
          cardKind: StrawHouse
        },
        {
          name: '木の家',
          description: '木で作られた家',
          cardKind: WoodenHouse
        },
        {
          name: 'レンガの家',
          description: 'レンガで作られた家',
          cardKind: BrickHouse
        },
        {
          name: 'オオカミ',
          description: '悪いオオカミ',
          cardKind: Wolf
        }
      ]
    },
    playHiddenCard: (card: Card): FieldCards => {
      const fieldCards = ports.fieldPort.FindPlayedCard()
      fieldCards.push(card)
      return fieldCards
    }
  }
}
