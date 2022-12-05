// import { NextFunction, Request, Response } from 'express';
import { ErrorRequestHandler } from 'express';
import HttpException from '../util/HttpException';

const httpErrorExceptions: ErrorRequestHandler = (err, _req, res, _next) => {
  // Substituiu-se o 'NextFunction', 'Request', 'Response' pelo 'ErrorRequestHandler' no excopo da funcao, pois o parâmetro 'err' não aceitou nenhuma extensão <express> correspondente;
  const { statusCode, message } = err as HttpException;
  res.status(statusCode || 500).json({ message });
};

export default httpErrorExceptions;
