export type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  verify: boolean;
  password: string;
};

export type UpdateUser = {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
};

export type DeleteUser = {
  userId: number;
};
