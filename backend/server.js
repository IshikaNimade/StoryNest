const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const bodyParser = require("body-parser");
const typeDefs = require("./src/graphql/schema");
const userResolver = require("./src/graphql/resolvers/userResolver");
const { db } = require("./src/config/firebase");
const authenticate = require("./src/middlewares/auth");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Apply authentication middleware to protect routes
app.use(authenticate);

const resolvers = {
  Query: userResolver.Query,
  Mutation: userResolver.Mutation,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { db, currentUser: req.currentUser };
  },
});

server.start().then(() => {
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(
      `Server running on http://localhost:${PORT}${server.graphqlPath}`
    );
  });
});
