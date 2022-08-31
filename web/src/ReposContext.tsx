import React, { createContext, useCallback, useReducer } from 'react';
import { Repo } from './models/Repo';

type repoState = {
  repos: Repo[];
  status: string;
};

type RepoContextType = {
  loading: () => void;
  retrieveData: (payload: Repo[]) => void;
  filter: (payload: number) => void;
  state: repoState;
};

const ReposContext = createContext<RepoContextType>({
  loading: () => {},
  retrieveData: () => {},
  filter: () => {},
  state: { repos: [], status: '' },
});
