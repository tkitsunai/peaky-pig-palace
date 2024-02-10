import { BuildingPreparation, Preparation, createPhase } from '../domain/phase'
import { PhaseUsecase, PhaseUsecasePorts } from './phaseUsecase'

describe('Usecase test', () => {
  test('phase get next-phase', () => {
    const target = PhaseUsecase({} as PhaseUsecasePorts)
    expect(
      target.nextPhase(
        createPhase(
          {
            name: 'Preparation',
            playerHeldCards: []
          },
          Preparation
        )
      )
    ).toEqual(
      createPhase(
        {
          name: 'Building Preparation',
          playerHeldCards: []
        },
        BuildingPreparation
      )
    )
  })
})
