import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $uid: String!
    $email: String!
    $name: String!
    $photoURL: String!
    $emailVerified: Boolean!
  ) {
    createUser(
      uid: $uid
      email: $email
      name: $name
      photoURL: $photoURL
      emailVerified: $emailVerified
    ) {
      uid
      email
      name
      photoURL
      emailVerified
    }
  }
`;
