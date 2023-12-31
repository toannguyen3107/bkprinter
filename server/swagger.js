import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js']; // Add all your route files here

const doc = {
  info: {
    title: 'Bkprinter',
    description: 'Apis supports feature of project!',
    version: '1.0.0',
  },
  host: 'localhost:5001', // Update with your server's host and port
  basePath: '/',
  schemes: ['http'], // Update with your server's protocol (http or https)
  consumes: ['application/json'],
  produces: ['application/json'],
  securityDefinitions: {
    apiKeyAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'Authorization', // name of the header, query parameter or cookie
      description: 'Some description...'
    }
  },
  tags: [
    { name: 'Users', description: 'Operations related to users' },
    { name: 'Printers', description: 'Operations related to printers' },
    { name: 'Activities', description: 'Operations related to activities' },
    { name: 'Login', description: 'Operations related to login' },
    {name: 'Printing', description: 'Operations related to Printing'},
    {name: 'History', description: 'Operations related to History'}
  ],
};
const swaggerauto = swaggerAutogen();
swaggerauto(outputFile, endpointsFiles, doc).then(() => {
    require('./swagger-output.json');
});
