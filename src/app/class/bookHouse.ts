import {UpdateUser} from './update-user';
import {House} from './House';

export class BookHouse {
  id?: number;
  user: UpdateUser;
  house: House;
  bookDate: Date;
  checkinDate: Date;
  checkoutDate: Date;


  constructor(checkIn?: Date, checkOut?: Date) {
    this.checkinDate = checkIn;
    this.checkoutDate = checkOut;
  }
}
