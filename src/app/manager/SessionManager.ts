import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionManager {

  private readonly temporaryUsers: { email: string; password: string }[] = [
    { email: 'user', password: 'pass' }
  ];

  performLogin(user: string, password: string): boolean {
    const validUser = this.temporaryUsers.find(
      u => u.email === user && u.password === password
    );
    return !!validUser;
  }

  performRegister(email: string, password: string): boolean {
    const userExists = this.temporaryUsers.find(u => u.email === email);
    if (!userExists) {
      this.temporaryUsers.push({ email, password });
      return true;
    }
    return false;
  }

  performLogout() {
    console.log('Sesión cerrada');
  }
 
  
  
}
