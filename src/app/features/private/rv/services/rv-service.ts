import { Injectable } from '@angular/core';
import { MOCK_RV } from '../../../../mocks/rv.mock';
import { RvFilterModel, RvListeResponse } from '../models/rv.model';

@Injectable({ providedIn: 'root' })
export class RvService {
  public getRendezVous(filtre: RvFilterModel): RvListeResponse {
    let data = [...MOCK_RV];

    // 1. Filtrage
    if (filtre.statut) {
      data = data.filter(rv => rv.statut === filtre.statut);
    }
    if (filtre.type) {
      data = data.filter(rv => rv.type === filtre.type);
    }

    // 2. Paramètres de pagination
    const itemsPerPage = 5; // Tu peux mettre 5 ou 10 en prod
    const currentPage = filtre.page || 1;
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // 3. Découpage des données (Slice)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

    // 4. Génération du tableau de pages [1, 2, 3...]
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return {
      data: paginatedData, // On renvoie uniquement les éléments de la page
      totalItems: totalItems,
      currentPage: currentPage,
      totalPages: totalPages,
      pages: pages,
      size: itemsPerPage
    };
  }
}