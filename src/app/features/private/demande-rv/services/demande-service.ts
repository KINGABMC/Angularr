import { Injectable } from '@angular/core';
import { MOCK_DEMANDES } from '../../../../mocks/demande.mock';
import { DemandeRVFilterModel, DemandeListeRVModel, DemandeListeResponse } from '../models/demande.model';
import { environment } from '../../../../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class DemandeService {
  constructor() {}
  public  getDemandeRV( filtre: DemandeRVFilterModel={}): DemandeListeResponse {
   // Ici, on simule une requête à un service pour récupérer les demandes
   // Dans une vraie application, vous feriez une requête HTTP à votre backend
   let demandes =[ ...MOCK_DEMANDES];
    if (filtre.specialite) {
      demandes = demandes.filter(demande => demande.specialite === filtre.specialite);
    }
    if (filtre.statut) {
      demandes = demandes.filter(demande => demande.statut === filtre.statut);
    }
    const page = filtre.page || 1;
    const size = filtre.size || environment.limit || 5;
    //page=1, start=0[(Page-1*size)], end=5 [0,5[
    //page=2, start=5, end=10 [5,10[
    //page=3, start=10, end=15 [10,15[
    const start = (page - 1) * size;
    const end = start + size;
    const paginatedDemandes = demandes.slice(start, end);
    const TotalPages = Math.ceil(demandes.length / size);
    /*
    programmation impérative
    const pages: number[] = [] 
    for (let i = 1; i <= TotalPages; i++) {
      pages.push(i);
    }
    */
    const pages: number[] = Array.from({ length: TotalPages }, (_, i) => i + 1);
   return {
      data: paginatedDemandes,
      totalPages: TotalPages,
      currentPage: page,
      totalItems: demandes.length,
      pages: pages,
      size: size
    
   };
 }
}
