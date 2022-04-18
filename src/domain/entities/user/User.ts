export enum UserGender {
  MALE = 'male',
  FMALE = 'fmale'
}

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  verified: boolean;
  verificationCode: string;
  avatar: string;
  password: string;
  salt: string;
  gender: UserGender;
};
