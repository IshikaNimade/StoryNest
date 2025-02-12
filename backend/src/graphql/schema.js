const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    uid: ID!
    email: String!
    name: String!
    photoURL: String!
    emailVerified: Boolean!
  }

  type Mutation {
    createUser(
      uid: String!
      email: String!
      name: String!
      photoURL: String!
      emailVerified: Boolean!
    ): User
  }

  type Query {
    getUser(uid: String!): User
  }
`;

module.exports = typeDefs;
