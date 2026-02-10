import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detail-rv',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail-rv.html',
})
export class DetailRv {
  showInfos = false;
  showOrdonnance = false;

  toggleInfos() { this.showInfos = !this.showInfos; }
  toggleOrdonnance() { this.showOrdonnance = !this.showOrdonnance; }
}