//@flow
import { graphql } from 'graphql';
import schema from './schema';

const lambdaHandler = async (_event_: any, _context_: any) => {
  const result = await graphql(
    schema,
    '{ search(text: "text") { id, name, ingredients { text } } }',
  );
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

export { lambdaHandler };
