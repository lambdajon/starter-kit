import { DecodedRequest } from '../../domain/DecodedRequest';
import { Request } from 'express';
export class Take<T> {
  private request: DecodedRequest | Request;

  constructor(req: DecodedRequest | Request) {
    this.request = req;
  }

  body(key?: string): T {
    return key ? this.request.body[key] : this.request.body;
  }
  query(key?: string): T {
    return key ? this.request.query[key] : this.request.body;
  }
  params(key: string) {
    return key ? this.request.params[key] : null;
  }
}
