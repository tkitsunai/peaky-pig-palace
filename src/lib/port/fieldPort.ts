import { Card } from '../entity/card'

export interface FieldPort {
  FindPlayedCard: () => Card[]
}
