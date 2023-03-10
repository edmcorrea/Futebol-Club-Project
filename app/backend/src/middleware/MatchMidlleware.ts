import { NextFunction, Request, Response } from 'express';
import HttpException from '../util/HttpException';

export default class MatchMiddleware {
  sameTeams = (req: Request, res: Response, next: NextFunction) => {
    const { homeTeam, awayTeam } = req.body;
    if (homeTeam === awayTeam) {
      // return res.status(422)
      //   .json({ message: 'It is not possible to create a match with two equal teams' });
      throw new HttpException(422, 'It is not possible to create a match with two equal teams');
    }
    next();
  };
}
