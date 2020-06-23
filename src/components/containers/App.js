import React from 'react';
import { Articles } from '../presentation';

const App = () => {
  return (
    <div className="library">
      <header className="library-header">
        tiny news articles
      </header>
      <Articles />
    </div>
  )
};

export default App;