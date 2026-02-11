import { Component } from '@angular/core';
import { DemandeListeRVModel, DemandeRVFilterModel, DemandeListeResponse } from '../models/demande.model';
import { DemandeService } from '../services/demande-service';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule],
  templateUrl: './list-demande.html',
  styleUrl: './list-demande.css',
})
export class ListDemande implements OnInit {
  public title: string = "Mes demandes de rendez-vous";
  demandesResponse?: DemandeListeResponse;
  filter: DemandeRVFilterModel = {
    specialite: '',
    statut: 'En attente'
  };
 constructor(private demandeService: DemandeService) {
    this.demandesResponse = this.demandeService.getDemandeRV();
 }
 ngOnInit(): void {
   this.loadDemandes();
 }
//  onTape(event: any) {
//     this.title = event.target.value;
//  }
  onFilterSpecialitechange() {
    this.loadDemandes();
  }
  private loadDemandes() {
    this.demandesResponse = this.demandeService.getDemandeRV(this.filter);
  }
  onFilterStatutchange() {
    this.loadDemandes();
  }
  onPageChange(page: number) {
    this.filter.page = page;
    this.loadDemandes();
  }
}
  