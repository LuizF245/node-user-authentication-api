/*

GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id

*/

import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ name: "Luiz" }]
    res.status(StatusCodes.OK).send({ users })
});

usersRoute.get('/users/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    res.status(StatusCodes.OK).send({ id })
});

usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
    const user = req.body
    res.status(StatusCodes.CREATED).send({ user })
});

usersRoute.put('/users/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const user = req.body

    user.id = id

    res.status(StatusCodes.OK).send({ user })
});

usersRoute.delete('/users/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    res.status(StatusCodes.OK).send({ id })
});

export default usersRoute;