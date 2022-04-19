import { Response } from 'express';
import { DecodedRequest } from '../../../domain/DecodedRequest';
import { HttpRegular } from '../../../core/HttpRegular';
import { UserRepository } from '../../../repository/User';
import { UserUpdate } from '../useCases/UserUpdate';
import { Take } from '../../../interfaces/http/Take';
import { HttpRequestValidator } from '../../../shared/validators/HttpRequestValidator';
import { updateUserSchama } from '../interface/http/validation/index';
import * as VO from '../domain/vobjects';

export class UpdateUser extends HttpRegular {
    private useCase: UserUpdate;

    constructor() {
        super();
        this.useCase = new UserUpdate({ userRepository: new UserRepository() });
    }
    async actImpl(req: DecodedRequest, res: Response) {
        try {
            const take = new Take<VO.UpdateUser>(req);

            const params = take.params();
            const user = take.body();

            const validator = new HttpRequestValidator({ body: user, params: params }, updateUserSchama);

            const isValid = await validator.validate();
            if (!isValid) {
                const validationErrors = await validator.errors();
                return this.validationError(res, validationErrors);
            }

            const result = await this.useCase.act(user, { userId: params.userId });
            this.created(res, result);
        } catch (e) {
            console.log(e);
        }
    }
}
