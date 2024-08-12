import { gql } from "@apollo/client";

export const ADD_NOTE = gql`
  mutation AddNote($createdAt: String, $body: String, $title: String) {
    addNote(createdAt: $createdAt, body: $body, title: $title) {
      body
      createdAt
      id
      title
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation Mutation($deleteNoteId: ID!) {
    deleteNote(id: $deleteNoteId) {
      body
      createdAt
      id
      title
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote(
    $id: ID!
    $title: String
    $body: String
    $createdAt: String
  ) {
    updateNote(id: $id, title: $title, body: $body, createdAt: $createdAt) {
      body
      createdAt
      id
      title
    }
  }
`;
