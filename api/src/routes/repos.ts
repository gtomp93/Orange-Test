import { Router, Request, Response } from 'express';
import data from '../data/repos.json';
import { Repo } from '../models/Repo';
import axios from 'axios';
var util = require('util');

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  try {
    res.status(200);
    const repos = await axios.get(
      'https://api.github.com/users/silverorange/repos'
    );
    // console.log(Object.keys(repos));
    // console.log(repos.data);

    // I am going to combine the data from the json file and the data
    // I fetched from Axios, remove the repos where fork is true

    const reposForksRemoved = [...repos.data, ...data].filter(
      (repo) => !repo.fork
    );

    //Sort the repos from oldest creation date to newest
    const sortedRepos = reposForksRemoved.sort((a: Repo, b: Repo) => {
      return Date.parse(b.created_at) - Date.parse(a.created_at);
    });

    res.status(200).json({ status: 200, repos: sortedRepos });
  } catch (err: any) {
    console.log(err.message);
  }

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
});
