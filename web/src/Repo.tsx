import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Repo } from './models/Repo';

interface Props {
  repo: Repo | undefined;
}

const SINGLE_REPO: React.FC<Props> = ({ repo }) => {
  const navigate = useNavigate();

  return (
    <REPO_CONTAINER onClick={() => navigate(`/repos/${repo?.id}`)}>
      <p>name: {repo?.name}</p>
      <p>description: {repo?.description}</p>
      <p>language: {repo?.language}</p>
      <p>forks: {repo?.forks_count}</p>
    </REPO_CONTAINER>
  );
};

export default SINGLE_REPO;

const REPO_CONTAINER = styled.div`
  border: 2px solid orange;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  /* max-width: 400px;
  width: 80%; */
`;
