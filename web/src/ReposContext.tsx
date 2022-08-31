import React, {
  createContext,
  useCallback,
  useEffect,
  useReducer,
} from 'react';
import { Repo } from './models/Repo';

interface RepoState {
  repos: Repo[];
  status: string;
}

interface RepoContextType {
  loading: () => void;
  retrieveData: (payload: Repo[]) => void;
  filter: (payload: string) => void;
  error: () => void;
  state: RepoState;
}

export const REPOS_CONTEXT = createContext<RepoContextType>({
  loading: () => {
    return undefined;
  },
  retrieveData: () => {
    return undefined;
  },
  filter: () => {
    return undefined;
  },
  state: { repos: [], status: '' },
  error: () => {
    return undefined;
  },
});

interface ChildrenProps {
  children: JSX.Element;
}

//Right now I have payload set to any => I will try to define the payloads later
type Actions =
  | { type: 'loading' }
  | { type: 'retrieveData'; payload: any }
  | { type: 'filter'; payload: any }
  | { type: 'error' };

const reducer = (state: RepoState, action: Actions) => {
  switch (action.type) {
    case 'loading':
      return { ...state, status: 'loading' };
    case 'retrieveData':
      return { repos: action.payload, status: 'loaded' };
    case 'filter':
      //will figure this out later
      return { ...state };
    default:
      return { ...state };
  }
};

export const REPO_CONTEXT_PROVIDER: React.FC<ChildrenProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, { repos: [], status: '' });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'loading' });
      fetch('repos')
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            return Promise.reject('error');
          }
        })
        .then((data) => {
          dispatch({ type: 'retrieveData', payload: data.repos });
        })
        .catch((err) => console.log(err.message));
    };
    fetchData();
  }, []);

  const loading = useCallback(() => {
    dispatch({ type: 'loading' });
  }, [dispatch]);

  const retrieveData = useCallback(
    (repos: Repo[]) => {
      dispatch({ type: 'retrieveData', payload: repos });
      return undefined;
    },
    [dispatch]
  );

  const filter = useCallback(
    (search: string) => {
      dispatch({ type: 'retrieveData', payload: search });
    },
    [dispatch]
  );

  const error = useCallback(() => {
    dispatch({ type: 'error' });
  }, [dispatch]);

  return (
    <REPOS_CONTEXT.Provider
      value={{
        loading,
        retrieveData,
        filter,
        error,
        state,
      }}
    >
      {children}
    </REPOS_CONTEXT.Provider>
  );
};
