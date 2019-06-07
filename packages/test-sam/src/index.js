//@flow
import { graphql, buildSchema } from 'graphql';
import uuid from 'uuid/v4';

const schema = buildSchema(`
  type Greeting {
    id: String
    text: String
  }

  type Query {
    hello: Greeting
  }
`);

const root = {
  hello: () => ({ id: uuid(), text: 'Hello world!' }),
};

const lambdaHandler = async (_event_: any, _context_: any) => {
  const result = await graphql(schema, '{ hello { id, text } }', root);
  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};

export { lambdaHandler };
