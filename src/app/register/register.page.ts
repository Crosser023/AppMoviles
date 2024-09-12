import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from '../manager/SessionManager';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  showError: boolean = false;

  constructor(private sessionManager: SessionManager, private router: Router) {}

  register() {
    this.showError = false;
    if (this.sessionManager.performRegister(this.email, this.password)) {
      this.router.navigate(['/home']); // luego de registrarse y apretar el boton, me tira a la vista de home
    } else {
      this.errorMessage = 'El usuario ya existe';
      this.showError = true;
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
