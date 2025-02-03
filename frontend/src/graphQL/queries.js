import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($uid: String!) {
    getUser(uid: $uid) {
      uid
      email
      name
      imageUrl
      emailVerified
    }
  }
`;
