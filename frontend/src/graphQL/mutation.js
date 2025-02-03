import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser(
    $uid: String!
    $email: String!
    $name: String!
    $imageUrl: String!
    $emailVerified: Boolean!
  ) {
    createUser(
      uid: $uid
      email: $email
      name: $name
      imageUrl: $imageUrl
      emailVerified: $emailVerified
    ) {
      uid
      email
      name
      imageUrl
      emailVerified
    }
  }
`;
