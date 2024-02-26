// return.component.ts
import { Component } from '@angular/core';
import { LibraryService } from '../library.service';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css'],
})
export class ReturnComponent {
  selectedBook: string = '';
  borrowedBooks: string[] = ['Book 1', 'Book 2']; // Example borrowed books

  constructor(private libraryService: LibraryService) { }

  returnBook() {
    // Implement logic to save the book status as returned
    console.log(`Book ${this.selectedBook} returned`);
    // Add your logic to update book status or perform API calls

    // Update the count in the service
    this.libraryService.updateBooksReturnedCount(this.libraryService.booksReturnedCountSource.value + 1);
    this.libraryService.updateAvailableBooksCount(this.libraryService.availableBooksCountSource.value + 1);
  }
}
