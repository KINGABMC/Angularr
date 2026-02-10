import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Rv } from './features/rv/rv';
import { DetailRv } from './features/rv/detail-rv/detail-rv'; // Nouveau
import { Patient } from './features/patient/patient';
import { DossierMedical } from './features/patient/dossier-medical/dossier-medical'; // Nouveau
import { DemandeRv } from './features/demande-rv/demande-rv';

export const routes: Routes = [
    { path: 'dash', component: Dashboard },
    { path: 'rv', component: Rv },
    { path: 'rv/detail/:id', component: DetailRv },
    { path: 'patient', component: Patient },
    { path: 'patient/dossier', component: DossierMedical },
    { path: 'demande-rv', component: DemandeRv },
    { path: '', redirectTo: 'dash', pathMatch: 'full' }
];