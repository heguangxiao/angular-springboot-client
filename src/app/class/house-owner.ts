import {HouseStatus} from './house-status';
import {Category} from './category';

export interface HouseOwner {
  id?: number;
  name: string;
  address: string;
  bedRooms: number;
  bathRooms: number;
  description: string;
  pricePerNight: number;
  images: string;
  isRented: boolean;
  status: HouseStatus;
  category: Category;
}
