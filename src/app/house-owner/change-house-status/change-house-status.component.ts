import {Component, OnInit} from '@angular/core';
import {HouseOwnerService} from '../../service/house-owner.service';
import {House} from '../../class/house';
import {HouseStatus} from '../../class/house-status';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-change-house-status',
  templateUrl: './change-house-status.component.html',
  styleUrls: ['./change-house-status.component.css']
})
export class ChangeHouseStatusComponent implements OnInit {

  house: House;
  statusB = HouseStatus.BOOKED;
  statusCI = HouseStatus.CHECKED_IN;
  statusCO = HouseStatus.CHECKED_OUT;
  statusA = HouseStatus.AVAILABLE;

  constructor(private houseOwnerService: HouseOwnerService,
              private routes: ActivatedRoute) {
  }

  ngOnInit() {
    const formData: FormData = new FormData();
    this.routes.paramMap.subscribe((param: ParamMap) => {
      const id = parseInt(param.get('id'), 10);
      this.houseOwnerService.getDetailHouse(id).subscribe(next => {
        this.house = next;
      }, error => {
        console.log(error);
      });
    });
  }

  changeHouseStatus(bookForm) {
    this.houseOwnerService.changeHouseStatus(this.house.id, bookForm.value.status).subscribe(next => {
      console.log('update status successfully');
    }, error => {
      console.log('error update status' + error);
    });
  }

}
