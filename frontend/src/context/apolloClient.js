import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export const ApolloProviderComponent = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
