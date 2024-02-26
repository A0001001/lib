// logout.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  logout() {
    // Implement logout functionality here
    console.log('Logout button clicked');
    // Add your logout logic here
  }
}
