import { Schema, ValidationError } from 'joi';
interface ValidatorSchema<P, Q, B> {
  body?: Schema<B>;
  params?: Schema<P>;
  query?: Schema<Q>;
}

interface HttpRequestSections<P, Q, B> {
  body?: B;
  query?: Q;
  params?: P;
}

export class HttpRequestValidator<P, Q, B> {
  private request: HttpRequestSections<P, Q, B> = {};
  private schema: ValidatorSchema<P, Q, B>;
  private error: ValidationError;
  constructor(requestSection: HttpRequestSections<P, Q, B>, schema: ValidatorSchema<P, Q, B>) {
    this.schema = schema;

    if (requestSection.body) {
      this.request.body = requestSection.body;
    }
    if (requestSection.query) {
      this.request.query = requestSection.query;
    }
    if (requestSection.params) {
      this.request.params = requestSection.params;
    }
  }
  async validate() {
    const { error } = this.schema.body.validate(this.request.body, { abortEarly: false });

    if (error) {
      this.error = error;
      return false;
    }
    return true;
  }
  async errors() {
    return this.error.details;
  }
}
