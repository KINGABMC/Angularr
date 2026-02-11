import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';
import { Security } from 'src/app/core/services/security';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
   constructor(private securityService: Security, private router: Router) {}
   logout() {
    this.securityService.logout();
    alert('Vous avez été déconnecté avec succès.');
    this.router.navigate(['/public/login']);
  }
}
