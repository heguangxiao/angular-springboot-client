import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-history-booking',
  templateUrl: './history-booking.component.html',
  styleUrls: ['./history-booking.component.css']
})
export class HistoryBookingComponent implements OnInit {
  historyBooking;
  isDeleteBooking = false;
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
     this.getBookHouseByUser();
  }
  getBookHouseByUser() {
    this.bookService.getBookHouseByUser().subscribe(data => {
      this.historyBooking = data;
    }, error => {
      console.log(error);
    });
  }
  deleteBooking(id: number) {
    this.bookService.deleteBookHouse(id).subscribe(data => {
      this.getBookHouseByUser();
    }, error => {
      this.isDeleteBooking = true;
    });
  }

  detailBooking(name: string) {
    this.router.navigate(['bookDetail', name]);
  }
}
