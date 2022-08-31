import React, { useContext } from 'react';
import styled from 'styled-components';
import SINGLE_REPO from './Repo';
import { REPOS_CONTEXT } from './ReposContext';

const REPO_LIST = () => {
  const {
    state: { repos, status },
  } = useContext(REPOS_CONTEXT);
  console.log(repos);

  return (
    <LIST_CONTAINER>
      {status === 'loading' ? (
        <div>Loading</div>
      ) : (
        <LIST>
          {repos.map((repo) => {
            console.log(repo);
            return (
              <SINGLE_REPO repo={repo} key={repo.id}>
                ok
              </SINGLE_REPO>
            );
          })}
        </LIST>
      )}
    </LIST_CONTAINER>
  );
};

export default REPO_LIST;

const LIST_CONTAINER = styled.div``;

const LIST = styled.div``;
