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

// export class UpdateUser {
//   // tslint:disable-next-line:variable-name
//   private _name: string;
//   // tslint:disable-next-line:variable-name
//   private _birthday: Date;
//   // tslint:disable-next-line:variable-name
//   private _gender: Gender;
//   // tslint:disable-next-line:variable-name
//   private _address: string;
//   // tslint:disable-next-line:variable-name
//   private _phoneNumber: string;
//   // tslint:disable-next-line:variable-name
//   private _avatarUrl: string;
//
//   // tslint:disable-next-line:variable-name
//   private _id?: number;
//   // tslint:disable-next-line:variable-name
//   private _username?: string;
//   // tslint:disable-next-line:variable-name
//   private _email?: string;
//
//   constructor(name?: string, birthday?: Date,
//               gender?: Gender, address?: string,
//               phoneNumber?: string, avatarUrl?: string,
//               id?: number, username?: string, email?: string
//               ) {
//     this._name = name;
//     this._birthday = birthday;
//     this._gender = gender;
//     this._address = address;
//     this._phoneNumber = phoneNumber;
//     this._avatarUrl = avatarUrl;
//     this._id = id;
//     this._username = username;
//     this._email = email;
//   }
//
//   get id(): number {
//     return this._id;
//   }
//
//   set id(value: number) {
//     this._id = value;
//   }
//
//   get username(): string {
//     return this._username;
//   }
//
//   set username(value: string) {
//     this._username = value;
//   }
//
//   get email(): string {
//     return this._email;
//   }
//
//   set email(value: string) {
//     this._email = value;
//   }
//
//   get name(): string {
//     return this._name;
//   }
//
//   set name(value: string) {
//     this._name = value;
//   }
//
//   get birthday(): Date {
//     return this._birthday;
//   }
//
//   set birthday(value: Date) {
//     this._birthday = value;
//   }
//
//   get gender(): Gender {
//     return this._gender;
//   }
//
//   set gender(value: Gender) {
//     this._gender = value;
//   }
//
//   get address(): string {
//     return this._address;
//   }
//
//   set address(value: string) {
//     this._address = value;
//   }
//
//   get phoneNumber(): string {
//     return this._phoneNumber;
//   }
//
//   set phoneNumber(value: string) {
//     this._phoneNumber = value;
//   }
//
//   get avatarUrl(): string {
//     return this._avatarUrl;
//   }
//
//   set avatarUrl(value: string) {
//     this._avatarUrl = value;
//   }
// }
