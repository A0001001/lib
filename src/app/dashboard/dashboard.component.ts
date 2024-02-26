// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  booksTakenCount: number = 0;
  booksReturnedCount: number = 0;
  availableBooksCount: number = 0;

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    // Subscribe to the service to get real-time updates
    this.libraryService.booksTakenCount$.subscribe((count) => {
      this.booksTakenCount = count;
    });

    this.libraryService.booksReturnedCount$.subscribe((count) => {
      this.booksReturnedCount = count;
    });

    this.libraryService.availableBooksCount$.subscribe((count) => {
      this.availableBooksCount = count;
    });
  }
}
