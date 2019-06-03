//@flow

const lambdaHandler = async (_event_: any, _context_: any) => ({
  statusCode: 200,
  body: 'Hello World!',
});

export { lambdaHandler };
