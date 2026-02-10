import { Component, signal,inject } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './layouts/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly router = inject(Router);
  protected readonly title = signal('gest-hospital');
  protected  readonly showHeader = signal(true);
   constructor() {
      this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // On met à jour le signal : false si l'URL contient '/patient'
      this.showHeader.set(!event.url.includes('/patient'));
    });
  }
}
