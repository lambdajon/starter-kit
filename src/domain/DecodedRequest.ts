import { Request } from 'express';

export interface DecodedRequest extends Request {
  decoded: any;
}
