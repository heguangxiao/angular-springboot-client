import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HouseOwnerService} from '../../service/house-owner.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../class/category';
import {AngularFireStorage} from '@angular/fire/storage';
import {UploadService} from '../../service/upload.service';
import {FirebaseApp} from '@angular/fire';
import {Upload} from '../../class/upload';
import {TokenStorageService} from '../../service/token-storage.service';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  imageUrl = '';
  categories: Category[];
  newHouseForm: FormGroup;
  message: string;

  selectedFiles: FileList;
  currentUpload: Upload;
  percentage: number;

  constructor(private fb: FormBuilder,
              private houseOwnerService: HouseOwnerService,
              private categoryService: CategoryService,
              private storage: AngularFireStorage, private upSvc: UploadService, @Inject(FirebaseApp) firebaseApp: any,
              private token: TokenStorageService
  ) {
  }

  ngOnInit() {
    this.createHouseForm();
    this.getCategories();
    this.imageUrl = this.token.getAvatar();
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.upload();
    this.imageUrl = this.token.getAvatar();
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

  getCategories() {
    const listCategory = this.categoryService.getCategories();

    listCategory.subscribe(category => {
      this.categories = category;
    }, error => {
      console.log(error);
    });
  }


  createHouseForm() {
    this.newHouseForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      bedRooms: ['', Validators.required],
      bathRooms: ['', Validators.required],
      description: ['', Validators.required],
      pricePerNight: ['', Validators.required],
      images: ['', Validators.required],
      status: ['', Validators.required],
      category: ['', Validators.required]
    });
  }

  newHouse() {
    this.imageUrl = this.token.getAvatar();
    const formData: FormData = new FormData();
    const homePostInformation = this.newHouseForm.value;
    homePostInformation.images = this.imageUrl;
    formData.append('name', homePostInformation.name);
    formData.append('address', homePostInformation.address);
    formData.append('bedRooms', homePostInformation.bedRooms);
    formData.append('bathRooms', homePostInformation.bathRooms);
    formData.append('description', homePostInformation.description);
    formData.append('category', homePostInformation.category);
    formData.append('pricePerNight', homePostInformation.pricePerNight);
    formData.append('images', homePostInformation.images);
    console.log(homePostInformation);
    console.log(formData);
    this.houseOwnerService.newHouse(formData).subscribe(
      data => {
        this.message = 'successfully created house';
      }, error => {
        console.log(error);
      }
    );
  }

}
