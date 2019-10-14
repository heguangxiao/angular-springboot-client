import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HouseOwnerService} from '../service/house-owner.service';
import {HouseOwner} from '../class/house-owner';

@Component({
  selector: 'app-house-owner',
  templateUrl: './house-owner.component.html',
  styleUrls: ['./house-owner.component.css']
})
export class HouseOwnerComponent implements OnInit {

  houses: HouseOwner[];

  constructor(private router: Router,
              private houseOwnerService: HouseOwnerService) {
  }

  ngOnInit() {
    this.getListHouseByUser();
  }

  getListHouseByUser() {
    const listHouse = this.houseOwnerService.getAllHouseByUser();

    listHouse.subscribe(house => {
      this.houses = house;
    }, error => {
      console.log(error);
    });
  }

  newHouse() {
    this.router.navigate(['newhouse']);
  }

  changeHouseStatus(id: number) {
    this.router.navigate(['statushouse', id]);
  }

  deleteHouse(id: number) {
    this.houseOwnerService.deleteHouse(id).subscribe(() => {
      alert('You sure you want to delete');
      this.getListHouseByUser();
    }, error => {
      console.log(error);
    });

  }

}
