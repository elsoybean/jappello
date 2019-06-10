//@flow
import merge from 'lodash/merge';
import { makeExecutableSchema } from 'graphql-tools';

import {
  typeDefs as Category,
  resolvers as categoryResolvers,
} from './category';
import {
  typeDefs as Ingredient,
  resolvers as ingredientResolvers,
} from './ingredient';
import {
  typeDefs as Quantity,
  resolvers as quantityResolvers,
} from './quantity';
import { typeDefs as Recipe, resolvers as recipeResolvers } from './recipe';
import {
  typeDefs as RecipeIngredient,
  resolvers as recipeIngredientResolvers,
} from './recipeIngredient';
import { typeDefs as Unit, resolvers as unitResolvers } from './unit';
import {
  typeDefs as UnitConversion,
  resolvers as unitConversionResolvers,
} from './unitConversion';

const Query = `
  type Query {
    _empty_: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [
    Query,
    Category,
    Ingredient,
    Quantity,
    Recipe,
    RecipeIngredient,
    Unit,
    UnitConversion,
  ],
  resolvers: merge(
    {},
    categoryResolvers,
    ingredientResolvers,
    quantityResolvers,
    recipeResolvers,
    recipeIngredientResolvers,
    unitResolvers,
    unitConversionResolvers,
  ),
});

export default schema;
