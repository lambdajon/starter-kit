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
  verify: boolean;
  password: string;
};

export type GetOrDeleteUser = {
  userId: string;
};
