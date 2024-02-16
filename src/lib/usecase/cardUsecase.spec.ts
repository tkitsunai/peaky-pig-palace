import { Card } from '../entity/card'
import { CardUsecase, CardUsecaseDependencies } from './cardUsecase'
import {
  BrickHouse,
  StrawHouse,
  WoodenHouse,
  Wolf
} from '../domain/playableCard'
import { CardPort } from '../port/cardPort'
import { FieldPort } from '../port/fieldPort'

describe('Card Usecase test', () => {
  describe('getAll', () => {
    test('4枚のカードを取得する', () => {
      const cardUsecase = CardUsecase({} as CardUsecaseDependencies)
      const cards: Card[] = cardUsecase.drawCards()
      expect(cards.length).toBe(4)
    })
    test('4枚のカードは全種類取得する', () => {
      const cardGateway = {} as CardPort
      const cardUsecase = CardUsecase({} as CardUsecaseDependencies)
      const cards: Card[] = cardUsecase.drawCards()
      expect(cards).toEqual([
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
      ])
    })
  })

  describe('playHiddenCard', () => {
    test('カードをプレイするとすでにフィールドとしてプレイされたカードにプレイしたカードが追加された結果を得られる', () => {
      const fieldGateway = {} as FieldPort
      const cardUsecase = CardUsecase({
        fieldPort: fieldGateway
      } as CardUsecaseDependencies)
      const card: Card = {
        name: '藁の家',
        description: '藁で作られた家',
        cardKind: StrawHouse
      }
      const woodenCard: Card = {
        name: '木の家',
        description: '木で作られた家',
        cardKind: WoodenHouse
      }
      const mockfn = vi.fn(() => [card])
      fieldGateway.FindPlayedCard = mockfn
      const actual = cardUsecase.playHiddenCard(woodenCard)
      expect(mockfn).toHaveBeenCalled()
      expect(actual).toEqual([card, woodenCard])
    })
  })
})
