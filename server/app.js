const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://frost:%21%21%21apollo725%40%40%40@cluster0-mf75a.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(connectionString, { useNewUrlParser: true } );
mongoose.connection.once('open', () => {
  console.log("connected to database");
})

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});