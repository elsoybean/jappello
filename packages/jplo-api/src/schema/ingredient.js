//@flow

export const typeDefs = `
type Ingredient {
  name: String!
  category: Category
  units: [Unit!]
  unitConversions: [UnitConversion!]
  g: Float
  ml: Float
}
`;

export const resolvers = {
  Ingredient: {
    name: () => 'garlic',
    g: () => 24,
    ml: () => 18.2,
  },
};
