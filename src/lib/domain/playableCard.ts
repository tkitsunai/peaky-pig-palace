export type CardKind = StrawHouse | WoodenHouse | BrickHouse | Wolf

type StrawHouse = {
  level: 1
}

type WoodenHouse = {
  level: 2
}

type BrickHouse = {
  level: 3
}

type Wolf = {}

export const StrawHouse: StrawHouse = {
  level: 1
}
export const WoodenHouse: WoodenHouse = {
  level: 2
}
export const BrickHouse: BrickHouse = {
  level: 3
}
export const Wolf: Wolf = {} as Wolf
