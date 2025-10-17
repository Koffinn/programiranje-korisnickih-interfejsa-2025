import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Mej');
  
  constructor(protected router: Router) {}

  hasAuth() {
    if (localStorage.getItem('active')) {
      return true;
  }
    return false;
  }

  logoutNow() {
    if(!confirm("Are you sure you want to logout?")) {
      return;
    }
    UserService.logout();
    this.router.navigate(['/login']);
  }

}
