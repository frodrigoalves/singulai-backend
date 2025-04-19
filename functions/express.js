const serverless = require('@vendia/serverless-express');
const app = require('../src/server'); // ajuste se seu entrypoint for outro
exports.handler = serverless({ app });
