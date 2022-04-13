export type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  verify: boolean;
};

export type GetUser = {
  phoneNumber: string;
}
