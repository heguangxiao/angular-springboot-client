import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HouseOwnerService} from '../../service/house-owner.service';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../class/category';

@Component({
  selector: 'app-new-house',
  templateUrl: './new-house.component.html',
  styleUrls: ['./new-house.component.css']
})
export class NewHouseComponent implements OnInit {

  imageUrl = '../../assets/img/default-image.png';
  fileToUpload: File = null;
  categories: Category[];
  newHouseForm: FormGroup;

  constructor(private fb: FormBuilder,
              private houseOwnerService: HouseOwnerService,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.createHouseForm();
    this.getCategories();
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    // Show image preview
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
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
    const formData: FormData = new FormData();
    const homePostInformation = this.newHouseForm.value;
    homePostInformation.images = this.fileToUpload.name;
    formData.append('name', homePostInformation.name);
    formData.append('address', homePostInformation.address);
    formData.append('images', homePostInformation.images);
    formData.append('bedRooms', homePostInformation.bedRooms);
    formData.append('bathRooms', homePostInformation.bathRooms);
    formData.append('description', homePostInformation.description);
    formData.append('category', homePostInformation.category);
    formData.append('pricePerNight', homePostInformation.pricePerNight);
    console.log(homePostInformation);
    console.log(formData);
    this.houseOwnerService.newHouse(formData).subscribe(
      data => {
        console.log('successfully created house');
      }, error => {
        console.log(error);
      }
    );
  }

}
