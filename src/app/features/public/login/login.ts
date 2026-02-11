
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { UserLoginRequest } from 'src/app/core/models/user.model';
import { Security } from 'src/app/core/services/security';
@Component({
  selector: 'app-login',
  imports: [RouterLink,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userLogin: UserLoginRequest= {
    email: '',
    password: ''
  }
  constructor(private securityService: Security,private router: Router) {}
   onLogin(): void {
    const LoginResult = this.securityService.login(this.userLogin);
    if (LoginResult !== null) {
      console.log('Login successful:', LoginResult);
      // Rediriger vers la page d'accueil ou une autre page après le login
        this.router.navigate(['/private/dash']);
    } else {
      console.log('Login failed: Invalid email or password');
      // Afficher un message d'erreur à l'utilisateur
    } 
   }


    



}
