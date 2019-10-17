import {Component, OnInit} from '@angular/core';
import {HouseOwnerService} from '../../service/house-owner.service';
import {HouseStatus} from '../../class/house-status';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HouseOwner} from '../../class/house-owner';
import {AlertService} from '../../service/alert.service';

@Component({
  selector: 'app-change-house-status',
  templateUrl: './change-house-status.component.html',
  styleUrls: ['./change-house-status.component.css']
})
export class ChangeHouseStatusComponent implements OnInit {

  house: HouseOwner;
  statusB = HouseStatus.BOOKED;
  statusCI = HouseStatus.CHECKED_IN;
  statusCO = HouseStatus.CHECKED_OUT;
  statusA = HouseStatus.AVAILABLE;

  constructor(private houseOwnerService: HouseOwnerService,
              private routes: ActivatedRoute,
              private router: Router,
              private alertService: AlertService) {
  }

  ngOnInit() {
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
      this.alertService.success('update status successfully', true);
      this.router.navigate(['houseOwner']);
    }, error => {
      this.alertService.error('error update status' + error);
    });
  }

}
