import {Component, Inject, OnInit} from '@angular/core';
import {UpdateUser} from '../../class/update-user';
import {AuthenticationService} from '../../service/authentication.service';
import {Gender} from '../../class/gender';
import {toFormData} from '../../class/convertToForm';
import {Upload} from '../../class/upload';
import {TokenStorageService} from '../../service/token-storage.service';
import {UploadService} from '../../service/upload.service';
import {FirebaseApp} from '@angular/fire';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  form: any = {};
  updateInfo: UpdateUser = new UpdateUser();
  isUpdated = false;
  isUpdateFailed = false;
  errorMessage = '';
  data: FormData = new FormData();
  minDate: Date = new Date(new Date().getFullYear() - 90, new Date().getMonth(), new Date().getDate());
  maxDate: Date = new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate());
  selectedFiles: FileList;
  currentUpload: Upload;
  percentage: number;

  constructor(private authService: AuthenticationService,
              private tokenStorage: TokenStorageService,
              private uploadService: UploadService,
              @Inject(FirebaseApp) firebaseApp: any) { }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadAvatar() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentUpload = new Upload(file);
    this.uploadService.pushFileToStorage(this.currentUpload)
      .subscribe(
        percentage => {
          this.percentage = Math.round(percentage);
        },
        error => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.authService.getUserInfoForm().subscribe(data => this.updateInfo = data);
  }

  changeGender(isFemale: boolean) {
    this.updateInfo.gender = (isFemale) ? Gender.FEMALE : Gender.MALE;
  }

  onSubmit() {
      this.uploadAvatar();
      this.updateInfo.avatarUrl = this.tokenStorage.getAvatar();
      this.data = toFormData(this.updateInfo);
      this.authService.updateUserInfo(this.data).subscribe(
      data => {
        console.log(data);
        this.isUpdated = true;
        this.isUpdateFailed = false;
        this.tokenStorage.saveAvatarLink(data.avatarLink);
        this.tokenStorage.deleteAvatar();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isUpdateFailed = true;
      }
    );
  }
}
