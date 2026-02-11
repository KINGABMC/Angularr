import { Component, OnInit } from '@angular/core';
import { RvService } from './services/rv-service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RvFilterModel, RvListeResponse } from './models/rv.model';

@Component({
  selector: 'app-rv',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './rv.html',
  styleUrl: './rv.css',
})
export class Rv implements OnInit {
  rvResponse?: RvListeResponse;
  filter: RvFilterModel = { statut: '', type: '' };
  title = "Mes Rendez-vous";

  constructor(private rvService: RvService) {}

  ngOnInit() {
    this.loadRV();
  }

  loadRV() {
    this.rvResponse = this.rvService.getRendezVous(this.filter);
  }

  onFilterChange() {
    this.loadRV();
  }

  onPageChange(page: number) {
    if (this.rvResponse && page >= 1 && page <= this.rvResponse.totalPages) {
      this.filter.page = page;
      this.loadRV();
    }
  }
}