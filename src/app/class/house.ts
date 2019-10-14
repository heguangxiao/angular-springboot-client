import {HouseStatus} from './house-status';

export interface House {
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
}
