import React from 'react';
import { useQuery } from '@apollo/react-hooks';
//This is the GraphQL query we created earlier
import { GET_ARTICLES } from '../../graphql/queries';
import { Article } from './';

const Articles = () => {
    const { loading, error, data } = useQuery(GET_ARTICLES);
    console.log(data);
    if(loading)
      return <p>Loading...</p>;
    if(error) {
      return <p>Error fetching articles</p>;
    }
    return (
      <div className="library-container">
        {
            data.listArticles.data.map((article) => (
              <Article key={article.headline} {...article} />
            ))
        }
      </div>
    )
};

export default Articles;