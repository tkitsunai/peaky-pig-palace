import { Preparation, BuildingPreparation, Building } from './phase'

describe('Phase Test', () => {
  test('Preparation is done', () => {
    const target = Preparation
    expect(
      target.nextPhase({
        name: 'Preparation',
        playerHeldCards: []
      })
    ).toEqual({
      name: 'Building Preparation',
      playerHeldCards: [],
      ...BuildingPreparation
    })
  })
  test('BuildPreparation is done', () => {
    const target = Preparation
    expect(
      target.nextPhase({
        name: 'Preparation',
        playerHeldCards: []
      })
    ).toEqual({
      name: 'Building Preparation',
      playerHeldCards: [],
      ...BuildingPreparation
    })
  })

  test('BuildingPreparationではプレイヤーがカードを0枚の場合はBuildingPreparationを継続する', () => {
    const target = BuildingPreparation
    expect(
      target.nextPhase({
        name: 'Building Preparation',
        playerHeldCards: []
      })
    ).toEqual({
      name: 'Building Preparation',
      playerHeldCards: [],
      ...BuildingPreparation
    })
  })
  test('BuildingPreparationではプレイヤーがカードを1枚以上の場合はBuildingフェイズに移れる', () => {
    const target = BuildingPreparation
    expect(
      target.nextPhase({
        name: 'Building Preparation',
        playerHeldCards: ['a']
      })
    ).toEqual({
      name: 'Building',
      playerHeldCards: ['a'],
      ...Building
    })
  })
})
