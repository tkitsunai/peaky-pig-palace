import { Card, createCard } from '../entity/card'
import {
  CardUsecase,
  CardPort,
  CardUsecaseDependencies,
  FieldPort
} from './cardUsecase'
import {
  BrickHouse,
  StrawHouse,
  WoodenHouse,
  Wolf
} from '../domain/playableCard'

describe('Card Usecase test', () => {
  describe('getAll', () => {
    test('4枚のカードを取得する', () => {
      const cardUsecase = CardUsecase({} as CardUsecaseDependencies)
      const cards: Card[] = cardUsecase.dealCards()
      expect(cards.length).toBe(4)
    })
    test('4枚のカードは全種類取得する', () => {
      const cardGateway = {} as CardPort
      const cardUsecase = CardUsecase({} as CardUsecaseDependencies)
      const cards: Card[] = cardUsecase.dealCards()
      expect(cards).toEqual([
        createCard('藁の家', '藁で作られた家', StrawHouse),
        createCard('木の家', '木で作られた家', WoodenHouse),
        createCard('レンガの家', 'レンガで作られた家', BrickHouse),
        createCard('オオカミ', '悪いオオカミ', Wolf)
      ])
    })
  })

  describe('playHiddenCard', () => {
    test('カードをプレイするとすでにフィールドとしてプレイされたカードにプレイしたカードが追加された結果を得られる', () => {
      const cardGateway = {} as CardPort
      const fieldGateway = {} as FieldPort
      const cardUsecase = CardUsecase({
        fieldPort: fieldGateway
      } as CardUsecaseDependencies)
      const card = createCard('藁の家', '藁で作られた家', StrawHouse)
      const woodenCard = createCard('木の家', '木で作られた家', WoodenHouse)
      const mockfn = jest.fn(() => [card])
      fieldGateway.FindPlayedCard = mockfn
      const actual = cardUsecase.playHiddenCard(woodenCard)
      expect(mockfn).toHaveBeenCalled()
      expect(actual).toEqual([card, woodenCard])
    })
  })
})
