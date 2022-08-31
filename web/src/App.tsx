import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import RepoDetails from './RepoDetails';
import RepoList from './RepoList';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RepoList />} />
        <Route path="/repos/:id" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
}
