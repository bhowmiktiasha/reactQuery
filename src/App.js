// src/App.js
import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import RepoList from './RepoList';

const App = () => {
  const [username, setUsername] = useState('octocat'); // Default GitHub user

  return (
    <ApolloProvider client={client}>
      <div style={{display: "flex"}}>
        <h1>Fetching GitHub Repositories - Using GraphQL-React-Query Demo</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <RepoList username={username} />
      </div>
    </ApolloProvider>
  );
};

export default App;
