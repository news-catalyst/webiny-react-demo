import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ headline, byline, body }) => {
  console.log("body: ", body)
    return (
        <div className="book-container">
            <h3 className="book-title">{headline}</h3>
            <p>By: {byline.fullName}</p>
            {body[0].children.map(paragraph => (
              <p className="book-description">{paragraph.text}</p>
            ))}
        </div>
    )
};

// Article.propTypes = {
//     headline: PropTypes.string.isRequired,
//     fullName: PropTypes.string.isRequired,
//     body: PropTypes.string.isRequired
// };

export default Article;