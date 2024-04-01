export default () => ({
  swapi: process.env.SWAPI_URL || 'https://swapi.dev/api/',
  table: process.env.MODULE_TABLE || 'PlanetTable',
  region: process.env.DYNAMODB_REGION || 'us-west-2',
});
