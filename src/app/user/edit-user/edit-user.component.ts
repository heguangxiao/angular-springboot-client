import { Component, OnInit } from '@angular/core';
import {UpdateUser} from '../../class/update-user';
import {AuthenticationService} from '../../service/authentication.service';
import {Gender} from '../../class/gender';
import {toFormData} from '../../class/convertToForm';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  updateInfo: UpdateUser = new UpdateUser();
  isUpdated = false;
  isUpdateFailed = false;
  errorMessage = '';
  data: FormData = new FormData();
  minDate: Date = new Date(new Date().getFullYear() - 90, new Date().getMonth(), new Date().getDate());
  maxDate: Date = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.authService.getUserInfoForm().subscribe(data => this.updateInfo = data);
  }

  changeGender(isFemale: boolean) {
    this.updateInfo.gender = (isFemale) ? Gender.FEMALE : Gender.MALE;
  }

  onSubmit() {
      this.data = toFormData(this.updateInfo);
      this.authService.updateUserInfo(this.data).subscribe(
        data => {
          console.log(data);
          this.isUpdated = true;
          this.isUpdateFailed = false;
        },
        error => {
          console.log(error);
          this.errorMessage = error.error.message;
          this.isUpdateFailed = true;
        }
      );
  }
}
