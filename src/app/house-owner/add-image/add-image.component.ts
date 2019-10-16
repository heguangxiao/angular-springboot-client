import {Component, Inject, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {UploadService} from '../../service/upload.service';
import {FirebaseApp} from '@angular/fire';
import {Upload} from '../../class/upload';
import {TokenStorageService} from '../../service/token-storage.service';
import {toFormData} from '../../class/convertToForm';
import {ImageHouse} from '../../class/image';
import {ImageService} from '../../service/image.service';
import {HouseService} from '../../service/house.service';
import {Observable} from 'rxjs';

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
              private houseSvc: HouseService
  ) {
  }

  selectedFiles: FileList;
  currentUpload: Upload;
  percentage: number;
  images: Observable<any>;

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.uploadImages();
    console.log(this.tokenStorage.getAvatar());
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
        error => {
          console.log(error);
        }
      );
  }

  onSubmit() {
    if (!this.selectedFiles) {
      this.imageSvc.addImage(20, new ImageHouse(this.tokenStorage.getAvatar()));
    }

    this.images = this.imageSvc.getImageListHouse(20);

  }

  ngOnInit(): void {
  }
}
