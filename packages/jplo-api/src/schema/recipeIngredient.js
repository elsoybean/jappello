//@flow

export const typeDefs = `
type RecipeIngredient {
  text: String!
  quantity: Quantity
  ingredient: Ingredient
  preparation: String
}
`;

export const resolvers = {
  RecipeIngredient: {
    text: (root, args, context) => {
      console.log('INGREDIENTS FOR', root, args, context);
      return '13 cloves of garlic, minced';
    },
    preparation: () => 'minced',
  },
};
