interface phaseFn {
  nextPhase: (currentPhase: PhaseData) => Phase
}

type PhaseName =
  | 'Preparation'
  | 'Building Preparation'
  | 'Building'
  | 'Assult'
  | 'Assult Result'
  | 'Cleanup'
  | 'End'

type PhaseData = {
  name: PhaseName
  playerHeldCards: any[]
}

export type Phase = PhaseData & phaseFn

export const Preparation = {
  nextPhase: (currentPhase: PhaseData): Phase => {
    return createPhase(
      {
        name: 'Building Preparation',
        playerHeldCards: []
      },
      BuildingPreparation
    )
  }
}

export const BuildingPreparation = {
  nextPhase: (currentPhase: PhaseData): Phase => {
    if (currentPhase.playerHeldCards.length == 0) {
      return createPhase(
        {
          name: 'Building Preparation',
          playerHeldCards: currentPhase.playerHeldCards
        } as PhaseData,
        BuildingPreparation
      )
    }

    return createPhase(
      {
        name: 'Building',
        playerHeldCards: currentPhase.playerHeldCards
      },
      Building
    )
  }
}

export const Building = {
  nextPhase: (currentPhase: PhaseData): Phase => {
    return createPhase(
      {
        name: 'Assult',
        playerHeldCards: []
      } as PhaseData,
      {} as phaseFn
    )
  }
}

export function createPhase(phaseData: PhaseData, phaseFn: phaseFn): Phase {
  return {
    ...phaseData,
    ...phaseFn
  }
}
