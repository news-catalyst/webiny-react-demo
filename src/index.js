import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from 'apollo-link-context';
import { ApolloProvider } from '@apollo/react-hooks';

import { Main } from './components/containers';
import './stylesheets/styles.scss';

//This REACT_APP_GRAPHQL_URL is defined in a .env file at the root of the project
const link = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URL
});

const authLink = setContext((_, { headers }) => {
  // This REACT_APP_ACCESS_TOKEN is defined in a .env file at the root of the project
  const token = process.env.REACT_APP_ACCESS_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
  credentials: 'same-origin'
});

render((<ApolloProvider client={client}>
  <Router>
    <Main />
  </Router>
</ApolloProvider>),
  document.getElementById('root')
);