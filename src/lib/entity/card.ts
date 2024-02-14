import { CardKind } from '../domain/playableCard'

export type Card = {
  name: string
  description: string
  cardKind: CardKind
}

export type FieldCards = Card[]
