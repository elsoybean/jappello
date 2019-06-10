//@flow

export const typeDefs = `
type Quantity {
  quantity: Float
  units: Unit
}
`;

export const resolvers = {
  Quantity: {
    quantity: () => 3.75,
  },
};
