import { DemandeListeRVModel } from '../features/private/demande-rv/models/demande.model';
//Base de données mock des demandes de RV
// Simulation de données venant d'une API
// ou d'une Base de données du Backend
export const MOCK_DEMANDES: DemandeListeRVModel[] = [
    { 
      id: 1,
      dateDemande: '2024-07-01',
      statut: 'En attente',
      specialite: 'Cardiologie',
      heure: '10:00 AM',
     },
    { 
      id: 2,
      dateDemande: '2024-07-02',
       statut: 'Refusé', 
       specialite: 'Ophtalmologie', 
       heure: '11:00 AM',
     },
    {
     id: 3,
     dateDemande: '2024-07-03',
     statut: 'Accepté',
     specialite: 'Pédiatrie',
     heure: '02:00 PM',
     },
     {
       id: 4,
       dateDemande: '2024-07-04',
        statut: 'En attente',
        specialite: 'Orthopédie',
        heure: '03:30 PM',
     },
     {
         id: 5,
         dateDemande: '2024-07-05',
         statut: 'En attente',
         specialite: 'Cardiologie',
         heure: '11:00 AM',
     },
      {
         id: 6,
         dateDemande: '2024-07-05',
         statut: 'En attente',
         specialite: 'Ophtalmologie',
         heure: '11:00 AM',
     },
     {
         id: 7,
         dateDemande: '2024-07-05',
         statut: 'En attente',
         specialite: 'Orthopédie',
         heure: '11:00 AM',
     },
     {
         id: 8,
         dateDemande: '2024-07-05',
         statut: 'En attente',
         specialite: 'Pédiatrie',
         heure: '11:00 AM',
     },
     {
         id: 9,
         dateDemande: '2024-07-05',
         statut: 'En attente',
         specialite: 'Neurologie',
         heure: '11:00 AM',
     },
     {
            id: 10,
            dateDemande: '2024-07-05',
            statut: 'Refusé',
            specialite: 'Orthopédie',
            heure: '11:00 AM',
     },
      {
            id: 11,
            dateDemande: '2024-07-05',
            statut: 'Accepté',
            specialite: 'Pédiatrie',
            heure: '11:00 AM',
     },
     {
            id: 12,
            dateDemande: '2024-07-05',
            statut: 'Accepté',
            specialite: 'Cardiologie',
            heure: '11:00 AM',
     },
     {
            id: 13,
            dateDemande: '2024-07-05',
            statut: 'Accepté',
            specialite: 'Ophtalmologie',
            heure: '11:00 AM',
        },
     
];