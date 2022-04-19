import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { Take } from '../../../interfaces/http/Take';
import { UserRepository } from '../../../repository/User';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { getUserSchama } from '../interface/http/validation/index';
import { UserGet } from '../useCases/UserGet';
import * as VO from '../domain/vobjects';

export class GetUser extends HttpRegular {
    private useCase: UserGet;

    constructor() {
        super();
        this.useCase = new UserGet({ userRepository: new UserRepository() });
    }
    async actImpl(req: DecodedRequest, res: Response) {
        try {
            const take = new Take<VO.GetUser>(req);

            const params = take.params();
            const validator = new HttpRequestValidator({ params: params }, getUserSchama);

            const isValid = await validator.validate();
            if (!isValid) {
                this.ok(res, {});
            }

            const result = await this.useCase.act(params);
            this.ok(res, result || {});
        } catch (e) {
            console.log(e);
        }
    }
}
