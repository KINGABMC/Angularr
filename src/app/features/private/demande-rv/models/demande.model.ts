//Model(viewModel ou DTO) sont des classes Typescript qui représentent des structures de données 
// utilisées dans l'application.
//Types
// Classe Model (attributs publics)
//syntaxe de classe TypeScript
 /*class DemandeRV {
  constructor(
    public id: number,
    public dateDemande: Date,
    public statut: string,
    public heure: string,
  ) {}
 }
 const demande1 = new DemandeRV(1, new Date('2024-07-01'), 'En attente', '10:00 AM');
 //syntaxe de classe TypeScript
 class DemandeRVV2 {
    public id: number;
    public dateDemande: Date;
    public statut: string;
    public heure: string;
  constructor(
        id: number,
        dateDemande: Date,
        statut: string,
        heure: string,
  ) {
    this.id = id;
    this.dateDemande = dateDemande;
    this.statut = statut;
    this.heure = heure;
  }
 }
    const demande2 = new DemandeRVV2(2, new Date('2024-07-02'), 'Confirmé', '11:00 AM');
*/
// Enumerations (valeurs constantes)
   /* export enum SpécialiteModel {
        CARDIOLOGIE = 'Cardiologie',
        OPHTALMOLOGIE = 'Ophtalmologie',
        ORTHOPEDIE = 'Orthopédie',
        PEDIATRIE = 'Pédiatrie',
    }
    export enum StatutDemandeModel {
        EN_ATTENTE = 'En attente',
        ACCEPTE = 'Accepté',
        REFUSE = 'Refusé'
        }
    */
export type SpécialiteModel = 
         |'Cardiologie'
         | 'Ophtalmologie' 
         | 'Orthopédie' 
         | 'Pédiatrie'
         | 'Neurologie';

export type StatutDemandeModel = 
         |'En attente' 
         | 'Accepté' 
         | 'Refusé';
// Interfaces (contrats de structure pour les objets)
    export interface DemandeListeRVModel {
      id: number;
      dateDemande: string;
      statut: StatutDemandeModel;
      specialite: SpécialiteModel;
      heure: string;
    }
    export interface DemandeRVFilterModel {
      specialite?: SpécialiteModel|'';
      statut?: StatutDemandeModel;
      page?: number;
      size?: number;
    }
   
    /*
    let demandeFilter1: DemandeRVFilterModel = { specialite: 'Cardiologie', statut: 'En attente'};
    */
   
  export interface DemandeListeResponse {
      data: DemandeListeRVModel[];
      totalPages: number;
      currentPage: number;
      totalItems: number;
      pages: number[];
      size: number;
    }
  /* 
    
  */