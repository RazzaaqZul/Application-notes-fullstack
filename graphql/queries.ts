// to execute queries
import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query Query {
    notes {
      createdAt
      body
      id
      title
    }
  }
`;

export const GET_NOTE = gql`
  query Note($noteId: ID!) {
    note(id: $noteId) {
      body
      createdAt
      id
      title
    }
  }
`;
