import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Employee} from '../../class/employee';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
              private router: Router,
              private loginService: AuthenticationService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
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

  updateEmployee(id: number) {
    this.router.navigate(['edit', id]);
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
