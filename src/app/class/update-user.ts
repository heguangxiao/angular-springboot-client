import {Gender} from './gender';

export interface UpdateUser {
  // tslint:disable-next-line:variable-name
  name: string;
  // tslint:disable-next-line:variable-name
  birthday: Date;
  // tslint:disable-next-line:variable-name
  gender: Gender;
  // tslint:disable-next-line:variable-name
  address: string;
  // tslint:disable-next-line:variable-name
  phoneNumber: string;
  // tslint:disable-next-line:variable-name
  avatarUrl: string;
  id?: number;
//   // tslint:disable-next-line:variable-name
  username?: string;
//   // tslint:disable-next-line:variable-name
  email?: string;
}


