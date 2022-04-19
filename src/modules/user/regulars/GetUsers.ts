import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UsersGet } from '../useCases/UsersGet';

export class GetUsers extends HttpRegular {
    private useCase: UsersGet;

    constructor() {
        super();
        this.useCase = new UsersGet({ userRepository: new UserRepository() });
    }
    async actImpl(req: DecodedRequest, res: Response) {
        try {
            const result = await this.useCase.act();
            this.ok(res, result);
        } catch (e) {
            console.log(e);
        }
    }
}
