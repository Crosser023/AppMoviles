import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from '../manager/SessionManager';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private sessionManager: SessionManager, private router: Router) {}

  logout() {
    this.sessionManager.performLogout();
    this.router.navigate(['/login']);
  }
  goToCategories() {
    this.router.navigate(['/categories']);
  }
}
