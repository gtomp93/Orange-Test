import React, { useContext } from 'react';
import styled from 'styled-components';
import Loading from './Loading';
// import { Repo } from './models/Repo';
import SINGLE_REPO from './Repo';
import { REPOS_CONTEXT } from './ReposContext';

const REPO_LIST = () => {
  const {
    state: { repos, status, languages, displayed },
    filter,
  } = useContext(REPOS_CONTEXT);
  console.log(repos);

  //I tried to create an array of the lanaguage using a set but
  // typescript won't let me turn a set into an array

  return (
    <LIST_CONTAINER>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <>
          <LANGUAGES_LIST>
            {languages?.map((lang: string) => {
              return (
                <button key={lang} onClick={() => filter(lang)}>
                  {lang}
                </button>
              );
            })}
          </LANGUAGES_LIST>
          <LIST>
            {displayed.map((repo) => {
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

const LANGUAGES_LIST = styled.div`
  margin-bottom: 40px;
  button {
    margin-left: 20px;
    border: 1px solid orange;
  }
`;
