import React, { createContext, useCallback, useReducer } from 'react';
import { Repo } from './models/Repo';

type repoState = {
  repos: Repo[];
  status: string;
};

type RepoContextType = {
  loading: () => void;
  retrieveData: (payload: Repo[]) => void;
  filter: (payload: string) => void;
  state: repoState;
};

export const ReposContext = createContext<RepoContextType>({
  loading: () => {},
  retrieveData: () => {},
  filter: () => {},
  state: { repos: [], status: '' },
});

type childrenProps = {
  children: JSX.Element;
};

//Right now I have payload set to any => I will try to define the payloads later
type actions =
  | { type: 'loading' }
  | { type: 'retrieveData'; payload: any }
  | { type: 'filter'; payload: any };

const reducer = (state: repoState, action: actions) => {
  switch (action.type) {
    case 'loading':
      return { ...state, status: 'loading' };
    case 'retrieveData':
      return { ...state, status: 'loading' };
    case 'filter':
      //will figure this out later
      return { ...state };
    default:
      return { ...state };
  }
};

export const RepoContextProvider: React.FC<childrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { repos: [], status: '' });

  const loading = useCallback(() => {
    dispatch({ type: 'loading' });
  }, [dispatch]);

  const retrieveData = useCallback(
    (repos: Repo[]) => {
      dispatch({ type: 'retrieveData', payload: repos });
    },
    [dispatch]
  );

  const filter = useCallback(
    (search: string) => {
      dispatch({ type: 'retrieveData', payload: search });
    },
    [dispatch]
  );

  return (
    <ReposContext.Provider
      value={{
        loading,
        retrieveData,
        filter,
        state,
      }}
    ></ReposContext.Provider>
  );
};
