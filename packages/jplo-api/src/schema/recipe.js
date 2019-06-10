//@flow
import uuid from 'uuid/v4';

export const typeDefs = `
extend type Query {
  search(text: String!): Recipe
}

type Recipe {
  id: ID
  name: String!
  source: String
  ingredients: [RecipeIngredient!]!
  directions: [String!]!
  prepTime: Int
  cookTime: Int
  totalTime: Int
}
`;

export const resolvers = {
  Query: {
    search: (root, args) => {
      console.log('SEARCH', root, args);
      const id = uuid();
      return {
        id,
        name: `Recipe ${id}`,
      };
    },
  },
  Recipe: {
    ingredients: (root, args, context) => {
      console.log('INGREDIENTS FOR', root, args, context);
      return [{ id: 1 }, { id: 2 }];
    },
  },
};
