export type RvStatut = 'Confirmé' | 'Réalisé' | 'Annulé' | '';
export type RvType = 'Consultation' | 'Suivi' | 'Urgence' | '';

export interface RendezVousModel {
  id: number;
  dateHeure: string;
  type: RvType;
  medecin: string;
  statut: RvStatut;
}

export interface RvFilterModel {
  statut: RvStatut;
  type: RvType;
  page?: number;
}

export interface RvListeResponse {
  data: RendezVousModel[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  pages: number[];
  size: number;
}