import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SINGLE_REPO from './Repo';
import { REPOS_CONTEXT } from './ReposContext';
import ReactMarkdown from 'react-markdown';

const REPO_DETAILS: React.FC = () => {
  const { id } = useParams();
  const {
    state: { repos },
  } = useContext(REPOS_CONTEXT);
  const [markdown, setMarkdown] = useState<string>('');

  const REPO_INFO = repos.find((repo) => repo.id === Number(id));

  console.log(REPO_INFO?.full_name);

  useEffect(() => {
    if (REPO_INFO) {
      fetch(
        `https://raw.githubusercontent.com/${REPO_INFO.full_name}/master/README.md`
      )
        .then((res) => res.json())
        .then((data) => {
          setMarkdown(data);
        });
    }
  }, [REPO_INFO]);

  return (
    <>
      <SINGLE_REPO repo={REPO_INFO} />
      <ReactMarkdown children={markdown} />
    </>
  );
};

export default REPO_DETAILS;
