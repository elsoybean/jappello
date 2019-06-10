//@flow

export const typeDefs = `
enum UnitType {
  weight
  volume
  nominal
}

interface Unit {
  name: String!
  alternateNames: [String!]
  type: UnitType
}

type WeightUnit implements Unit {
  name: String!
  alternateNames: [String!]
  type: UnitType
  g: Float
}

type VolumeUnit implements Unit {
  name: String!
  alternateNames: [String!]
  type: UnitType
  ml: Float
}

type NominalUnit implements Unit {
  name: String!
  alternateNames: [String!]
  type: UnitType
}
`;

export const resolvers = { Unit: {} };
