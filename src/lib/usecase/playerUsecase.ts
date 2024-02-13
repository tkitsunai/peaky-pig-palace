import { Player } from '../domain/player'
import { Card } from '../entity/card'

export type PlayerUsecase = {
  setHandCards(player: Player, arg1: Card[]): void
  getPlayers: () => Player[]
}

export function PlayerUsecase(): PlayerUsecase {
  return {} as PlayerUsecase
}
