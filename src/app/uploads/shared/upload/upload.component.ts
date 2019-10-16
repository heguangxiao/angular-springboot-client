import {Component, Inject, Input, OnInit} from '@angular/core';
import {Upload} from '../../../class/upload';
import {UploadService} from '../../../service/upload.service';
import * as _ from 'lodash';
import {FirebaseApp} from '@angular/fire';
import {AngularFireStorage} from '@angular/fire/storage';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private storage: AngularFireStorage, private upSvc: UploadService, @Inject(FirebaseApp) firebaseApp: any) {
  }

  selectedFiles: FileList;
  currentUpload: Upload;
  percentage: number;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.selectedFiles = undefined;

    this.currentUpload = new Upload(file);
    this.upSvc.pushFileToStorage(this.currentUpload)
      .subscribe(
      percentage => {
        this.percentage = Math.round(percentage);
      },
      error => {
        console.log(error);
      }
    );
  }

  uploadM() {
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

  uploadSingle() {
    const file = this.selectedFiles.item(0);
    this.currentUpload = new Upload(file);
    this.upSvc.pushUpload(this.currentUpload);
  }

  uploadMulti() {
    const files = this.selectedFiles;
    const filesIndex = _.range(files.length);
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.upSvc.pushUpload(this.currentUpload); }
    );
  }

  ngOnInit(): void {
  }
}
