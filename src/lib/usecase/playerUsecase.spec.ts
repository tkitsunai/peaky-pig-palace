import { Player } from '../domain/player'
import { PlayerPort } from '../port/playerPort'
import { PlayerUsecase } from './playerUsecase'

describe('Player Usecase test', () => {
  test('setHandCards', () => {
    const player: Player = { id: 'id1', name: 'name' }
    const gatewayMockFn = {
      setPlayerHands: vi.fn()
    }
    const playerGateway: PlayerPort = {
      setPlayerHands: gatewayMockFn.setPlayerHands
    }
    const target = PlayerUsecase({
      playerPort: playerGateway
    })
    target.setHandCards(player.id, [])
    expect(gatewayMockFn.setPlayerHands).toHaveBeenCalled()
  })
})
