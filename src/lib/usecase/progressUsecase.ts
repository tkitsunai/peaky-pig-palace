import { Card } from '../entity/card'
import { CardUsecase } from './cardUsecase'
import { PlayerUsecase } from './playerUsecase'

type Options = {
  CardUsecase: CardUsecase
  PlayersUsecase: PlayerUsecase
}

export function ProgressUsecase(usecases: Options) {
  // facade of game progress
  return {
    waitingMatchMaking: () => {},
    start: () => {},
    preparetion: () => {
      const players = usecases.PlayersUsecase.getPlayers()
      players.forEach((player) => {
        usecases.PlayersUsecase.setHandCards(
          player,
          usecases.CardUsecase.drawCards()
        )
      })
    },
    decideFirstPlayer: () => {},
    nextPlayer: () => {},
    playCard: () => {},
    openFieldCard: () => {},
    specifyAttackTarget: () => {},
    processAttackResult: () => {},
    cleanup: () => {},
    nextTurn: () => {},
    nextPhase: () => {},
    end: () => {}
  }
}
