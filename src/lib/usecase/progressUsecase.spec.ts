import { Player } from '../domain/player'
import { ProgressUsecase } from './progressUsecase'

describe('progressUsecase', () => {
  test('progress - preparation', () => {
    const players = [
      {
        id: '1',
        name: 'player1'
      },
      {
        id: '2',
        name: 'player2'
      }
    ]
    const getPlayersFn = vi.fn(() => players)
    const setHandCardsFn = vi.fn()
    const drawCardsFn = vi.fn()
    const progressUsecase = ProgressUsecase({
      CardUsecase: {
        drawCards: drawCardsFn,
        playHiddenCard: () => []
      },
      PlayersUsecase: {
        getPlayers: getPlayersFn,
        setHandCards: setHandCardsFn
      }
    })
    progressUsecase.preparetion()
    expect(getPlayersFn).toHaveBeenCalled()
    expect(setHandCardsFn).toHaveBeenCalledTimes(2)
    expect(drawCardsFn).toHaveBeenCalledTimes(2)
  })
})
