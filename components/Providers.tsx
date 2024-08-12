"use client";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const client = new ApolloClient({
    // WARNING!
    // uri must match with ur graphql server
    uri: "http://localhost:3000/api/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>{children}</ChakraProvider>
    </ApolloProvider>
  );
};
