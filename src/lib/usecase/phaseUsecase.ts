import { Phase } from '../domain/phase'

interface PhasePort {}

export interface PhaseUsecasePorts {
  phasePort: PhasePort
}

export function PhaseUsecase(options: PhaseUsecasePorts) {
  const ports = options
  return {
    nextPhase: (currentPhase: Phase): Phase => {
      return currentPhase.nextPhase(currentPhase)
    }
  }
}
