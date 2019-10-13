import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {House} from '../../class/House';
import {BookHouse} from '../../class/bookHouse';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {HouseService} from '../../service/house.service';

function compareTwoDates(c: AbstractControl) {
  const v = c.value;
  return (new Date(v.checkIn) < new Date(v.checkOut) ? null : {
    validateTime: true
  });
}
@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})

export class HouseDetailComponent implements OnInit {
  id: number;
  house: House;
  errorMessage: string;
  bookForm: FormGroup;
  book: BookHouse;
  isBookHouse = false;
  invalidMessage: string;
  booked = false;
  total;
  authority = false;
  isRented;
  booking;
  minDate = new Date();
  error: any = {isError: false, errorMessage: ''};

  constructor(private route: ActivatedRoute, private bookService: BookService, private fb: FormBuilder,
              private token: TokenStorageService, private houseService: HouseService) {
  }

  ngOnInit() {
    this.house = new House();
    this.id = this.route.snapshot.params.id;
    this.houseService.getHouseInfoById(this.id)
      .subscribe(data => {
        this.house = data;
      }, error1 => console.log(error1));
    this.bookForm = this.fb.group({
      checkIn: ['', [Validators.required, Validators.min(this.minDate.getTime())]],
      checkOut: ['', [Validators.required]]
    });
    if (this.token.getToken()) {
      this.authority = true;
    }
  }

  onBooking() {
    this.booking = true;
    this.invalidMessage = null;
    const id = +this.route.snapshot.paramMap.get('id');
    const {value} = this.bookForm;
    this.bookService.bookHouse(id, value).subscribe(data => {
        console.log(data);
        this.isBookHouse = true;
        this.booked = true;
      }, error1 => {
        console.log(error1);
        this.booked = false;
      }
    );
  }
}
