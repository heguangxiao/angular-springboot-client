import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../class/employee';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';
import {House} from '../../class/House';
import {BookService} from '../../service/book.service';
import {HouseService} from '../../service/house.service';
import {TokenStorageService} from '../../service/token-storage.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;
  listHouse: House [];

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private loginService: AuthenticationService,
              private  houseService: HouseService,
  ) {
  }

  ngOnInit() {
    this.reloadData();
  }

  newHouse() {
    this.router.navigate(['newhouse']);
  }

  reloadData() {
    this.houseService.getListHouse().subscribe(house => {
      this.listHouse = house;
    }, error => {
      console.log(error);
    });
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  houseDetail(id: number) {
    this.router.navigate(['houseDetail', id]);
  }

}
