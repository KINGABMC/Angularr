import { RendezVousModel } from '../features/private/rv/models/rv.model';

export const MOCK_RV: RendezVousModel[] = [
  { id: 1, dateHeure: '15/02/2026 - 14:00', type: 'Consultation', medecin: 'Dr. Ndiaye', statut: 'Confirmé' },
  { id: 2, dateHeure: '18/02/2026 - 09:30', type: 'Suivi', medecin: 'Dr. Diop', statut: 'Réalisé' },
  { id: 3, dateHeure: '20/02/2026 - 11:00', type: 'Consultation', medecin: 'Dr. Fall', statut: 'Confirmé' },
  { id: 4, dateHeure: '22/02/2026 - 16:00', type: 'Suivi', medecin: 'Dr. Ndiaye', statut: 'Annulé' },
  { id: 5, dateHeure: '25/02/2026 - 10:00', type: 'Urgence', medecin: 'Dr. Diop', statut: 'Confirmé' },
  { id: 6, dateHeure: '28/02/2026 - 14:30', type: 'Consultation', medecin: 'Dr. Fall', statut: 'Réalisé' },
  { id: 7, dateHeure: '02/03/2026 - 09:00', type: 'Suivi', medecin: 'Dr. Ndiaye', statut: 'Confirmé' },
  { id: 8, dateHeure: '05/03/2026 - 11:30', type: 'Urgence', medecin: 'Dr. Diop', statut: 'Annulé' },
  { id: 9, dateHeure: '10/03/2026 - 15:00', type: 'Consultation', medecin: 'Dr. Fall', statut: 'Confirmé' },
  { id: 10, dateHeure: '12/03/2026 - 13:00', type: 'Suivi', medecin: 'Dr. Ndiaye', statut: 'Réalisé' },
];