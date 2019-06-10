//@flow

export const typeDefs = `
type Category {
  name: String!
}
`;

export const resolvers = {
  Category: {
    name: () => 'some-category',
  },
};
