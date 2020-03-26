const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const graphqlHTTP = require('express-graphql');
const graphQlBuilder = require('objection-graphql').builder;

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

const DonationDropBox = require('./modules/donation-drop-boxes/DonationDropBox')

// This is all you need to do to generate the schema.
const graphQlSchema = graphQlBuilder()
  .model(DonationDropBox)
  .build();

// The root provides a resolver function for each API endpoint
const root = {
  box: () => {
    return DonationDropBox.query();
  },
};

app.use('/graphql', graphqlHTTP({
  schema: graphQlSchema,
  rootValue: root,
  graphiql: true,
}));

module.exports = app
