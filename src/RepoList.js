// src/RepoList.js
import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_REPOS = gql`
  query GetRepos($username: String!) {
    user(login: $username) {
      repositories(first: 10) {
        nodes {
          name
          url
        }
      }
    }
  }
`;

const RepoList = ({ username }) => {
  const { loading, error, data } = useQuery(GET_REPOS, {
    variables: { username },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.user.repositories.nodes.map((repo) => (
        <li key={repo.name}>
          <a href={repo.url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default RepoList;
