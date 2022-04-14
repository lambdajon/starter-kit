import { Schema, ValidationErrorItem } from 'joi';
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
  private errorsItems: ValidationErrorItem[];
  constructor(requestSection: HttpRequestSections<P, Q, B>, schema: ValidatorSchema<P, Q, B>) {
    this.schema = schema;
    this.errorsItems = [];
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
    if (this.request.body) {
      const { error } = this.schema.body.validate(this.request.body, { abortEarly: false });
      if (error) {
        console.log('Bodyda error: ', error);
        this.errorsItems = [...this.errorsItems, ...error.details];
      }
    }
    if (this.request.params) {
      const { error } = this.schema.params.validate(this.request.params, { abortEarly: false });
      if (error) {
        console.log('Params error: ', error);
        this.errorsItems = [...this.errorsItems, ...error.details];
      }
    }
    if (this.request.query) {
      const { error } = this.schema.query.validate(this.request.query, { abortEarly: false });
      if (error) {
        console.log('Queryda error: ', error);
        this.errorsItems = [...this.errorsItems, ...error.details];
      }
    }
    return this.errorsItems.length === 0;
  }
  async errors() {
    return this.errors;
  }
}
