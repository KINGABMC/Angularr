import { Component } from '@angular/core';
import { DemandeListeRVModel, DemandeRVFilterModel, DemandeListeResponse } from '../models/demande.model';
import { DemandeService } from '../services/demande-service';
import { OnInit,OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-demande',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './list-demande.html',
  styleUrl: './list-demande.css',
})
export class ListDemande implements OnInit, OnDestroy {
  public title: string = "Mes demandes de rendez-vous";
  demandesResponse?: DemandeListeResponse;
  filter: DemandeRVFilterModel = {
    specialite: '',
    statut: 'En attente'
  };
 constructor(private demandeService: DemandeService) {
    this.demandesResponse = this.demandeService.getDemandeRV();
 }
 
 ngOnDestroy(): void {
   alert("ListDemande component is being destroyed");
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
  get desactiverPrecedent(): boolean {
    return this.demandesResponse?.currentPage === 1;
  }
  get desactiverSuivant(): boolean {
    return this.demandesResponse?.currentPage === this.demandesResponse?.totalPages;
  }
}
  