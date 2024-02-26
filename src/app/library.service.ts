// library.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  public booksTakenCountSource = new BehaviorSubject<number>(0);
  booksTakenCount$ = this.booksTakenCountSource.asObservable();

  public booksReturnedCountSource = new BehaviorSubject<number>(0);
  booksReturnedCount$ = this.booksReturnedCountSource.asObservable();

  public availableBooksCountSource = new BehaviorSubject<number>(0);
  availableBooksCount$ = this.availableBooksCountSource.asObservable();

  updateBooksTakenCount(count: number) {
    this.booksTakenCountSource.next(count);
  }

  updateBooksReturnedCount(count: number) {
    this.booksReturnedCountSource.next(count);
  }

  updateAvailableBooksCount(count: number) {
    this.availableBooksCountSource.next(count);
  }
}
