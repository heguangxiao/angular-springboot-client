import { Component, OnInit } from '@angular/core';
import {HouseService} from '../../service/house.service';
import {Observable} from 'rxjs';
import {House} from '../../class/House';
import {AuthenticationService} from '../../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-house-user',
  templateUrl: './list-house-user.component.html',
  styleUrls: ['./list-house-user.component.css']
})
export class ListHouseUserComponent implements OnInit {
  listHouse: Observable<House[]>;
  constructor(private houseService: HouseService, private loginService: AuthenticationService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.listHouse = this.houseService.getListHouse();
  }
  houseDetail(id: number) {
    this.router.navigate(['houseDetail', id]);
  }
}
