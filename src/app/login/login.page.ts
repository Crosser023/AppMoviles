import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionManager } from '../manager/SessionManager';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';
  errorMessage: string = 'Correo o contraseña incorrectos';
  showError: boolean = false; // el msg de error hacemos aparezca inmediatamente al entrar a la vista de login

  constructor(private sessionManager: SessionManager, private router: Router) {}

  login() {
    this.showError = false; // si no hay error en credencial, simplemente no lo muestra y me dirige al home
    if (this.sessionManager.performLogin(this.email, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.showError = true; // si hay error de credenciales, me mostrara el mensaje de err
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
