import { Router, Request, Response } from 'express';

import axios from 'axios';
export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');

  try {
    res.status(200);
    const repos = await axios.get(
      'https://api.github.com/users/silverorange/repos'
    );
    console.log(repos);
    console.log(typeof repos);
    res.status(200).json({ status: 200 });
  } catch (err: any) {
    console.log(err.message);
  }

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
});
