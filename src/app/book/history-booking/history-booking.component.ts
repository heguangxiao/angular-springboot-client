import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-history-booking',
  templateUrl: './history-booking.component.html',
  styleUrls: ['./history-booking.component.css']
})
export class HistoryBookingComponent implements OnInit {
  historyBooking;
  isDeleteBooking = false;
  constructor(private bookService: BookService) { }

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
      this.bookService.getBookHouseByUser();
    }, error => {
      this.isDeleteBooking = true;
    });
  }
}
