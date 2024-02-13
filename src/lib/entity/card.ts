import { CardKind } from "../domain/playableCard";

export type Card = {
    name: string;
    description: string;
    cardKind: CardKind;
}

export function createCard(name: string, description: string, cardKind: CardKind): Card {
  return {
    name,
    description,
    cardKind
  }
}

export type FieldCards = Card[]