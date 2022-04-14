export type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  verify: boolean;
  password: string;
};

export type UpdateUser = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type GetUser = {
  user_id: string;
};
