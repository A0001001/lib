import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksComponent } from './books/books.component';
import { TakeComponent } from './take/take.component';
import { ReturnComponent } from './return/return.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'books', component: BooksComponent },
  { path: 'take', component: TakeComponent },
  { path: 'return', component: ReturnComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
