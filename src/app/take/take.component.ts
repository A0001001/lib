// take.component.ts
import { Component } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css'],
})
export class TakeComponent {
  selectedBook: string = '';
  availableBooks: string[] = ['Book 1', 'Book 2', 'Book 3', 'Book 4']; // Example available books

  constructor(private libraryService: LibraryService) { }

  takeBook() {
    // Implement logic to save the book status as taken
    console.log(`Book ${this.selectedBook} taken`);
    // Add your logic to update book status or perform API calls

    // Update the count in the service
    this.libraryService.updateBooksTakenCount(this.libraryService.booksTakenCountSource.value + 1);
    this.libraryService.updateAvailableBooksCount(this.libraryService.availableBooksCountSource.value - 1);
  }
}
