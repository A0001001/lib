// books.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  allBooks: string[] = ['Book 1', 'Book 2', 'Book 3', 'Book 4']; // Example books
}
