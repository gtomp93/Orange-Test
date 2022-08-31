import React, { useContext } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
import { Repo } from './models/Repo';
import SINGLE_REPO from './Repo';
import { REPOS_CONTEXT } from './ReposContext';

const REPO_LIST = () => {
  const {
    state: { repos, status },
  } = useContext(REPOS_CONTEXT);
  console.log(repos);

  //I tried to create an array of the lanaguage using a set but
  // typescript won't let me turn it into an array

  let languages = repos?.reduce((acc:[], cur:) => {
    if (!acc.includes(cur.language)) {
      acc.push(cur.language);
    }
  }, []);

  return (
    <LIST_CONTAINER>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <>
          {languages.map((language) => {})}
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
        </>
      )}
    </LIST_CONTAINER>
  );
};

export default REPO_LIST;

const LIST_CONTAINER = styled.div`
  width: 100%;
  /* background: green; */
`;

const LIST = styled.div`
  margin: 0 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
`;
