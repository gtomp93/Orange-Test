import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './Header';
import RepoDetails from './RepoDetails';
import RepoList from './RepoList';

export function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RepoList />} />
          <Route path="/repos/:id" element={<RepoDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
