import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {TokenStorageService} from '../../service/token-storage.service';
import {HouseService} from '../../service/house.service';
import {House} from '../../class/House';
import {BookHouse} from '../../class/bookHouse';
import {Observable} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UpdateUser} from '../../class/update-user';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: BookHouse;
  name: string;
  user: UpdateUser;

  constructor(private route: ActivatedRoute,
              private bookService: BookService
  ) { }

  ngOnInit() {
    this.getDetailBook();
    console.log(this.user);
  }

  getDetailBook() {
    // this.book = new BookHouse();
    // this.user = new UpdateUser();
    this.name = this.route.snapshot.params.name;
    this.bookService.findByHouseName(this.name)
      .subscribe(data => {
        this.book = data;
        this.user = this.book.user;
        console.log(this.user);
      }, error => {
        console.log(error);
      });
  }

}
