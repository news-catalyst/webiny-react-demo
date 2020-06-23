import { gql } from 'apollo-boost';

export const GET_ARTICLES = gql`{
  listArticles {
    data {
      headline
      byline {
        fullName
      }
      body
    }
  }
}`;