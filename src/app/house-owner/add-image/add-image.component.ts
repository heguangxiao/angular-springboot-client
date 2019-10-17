import {Component, Inject, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {UploadService} from '../../service/upload.service';
import {FirebaseApp} from '@angular/fire';
import {Upload} from '../../class/upload';
import {TokenStorageService} from '../../service/token-storage.service';
import {toFormData} from '../../class/convertToForm';
import {Image} from '../../class/image';
import {ImageService} from '../../service/image.service';
import {HouseService} from '../../service/house.service';
import {Observable} from 'rxjs';
import {HouseOwnerService} from '../../service/house-owner.service';
import {error} from 'util';
import {ActivatedRoute} from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(private storage: AngularFireStorage,
              private upSvc: UploadService,
              @Inject(FirebaseApp) firebaseApp: any,
              private tokenStorage: TokenStorageService,
              private imageSvc: ImageService,
              private route: ActivatedRoute
  ) {
  }

  id: number;
  selectedFiles: FileList;
  currentUpload: Upload;
  percentage: number;
  img: string;
  image: Image = new Image();

  data: FormData = new FormData();

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.uploadMul();
  }

  uploadImages() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentUpload = new Upload(file);
    this.upSvc.pushFileToStorage(this.currentUpload)
      .subscribe(
        percentage => {
          this.percentage = Math.round(percentage);
        },
        error1 => {
          console.log(error);
        }
      );
  }

  uploadMul() {
    const files = this.selectedFiles;
    this.selectedFiles = undefined;
    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushFileToStorage(this.currentUpload).subscribe(
        percentage => {
          this.percentage = Math.round(percentage);
        },
        error => {
          console.log(error);
        }
      ); }
    );
  }

  onSubmit() {
      this.img = this.tokenStorage.getAvatar();
      this.imageSvc.addImage(this.id, this.img).subscribe(
        next => {
          console.log(next);
        }, error2 => {
          console.log(error);
    }
      );
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }
}
