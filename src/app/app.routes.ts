import { Routes } from '@angular/router';
import { Public } from './features/public/public';
import { Private } from './features/private/private';
import { Dashboard } from './features/private/dashboard/dashboard';
import { Rv } from './features/private/rv/rv';
import { DetailRv } from './features/private/rv/detail-rv/detail-rv';
import { CreatePatient } from './features/public/create-patient/create-patient';
import { DossierMedical } from './features/private/dossier-medical/dossier-medical'; 
import { FormDemande } from './features/private/demande-rv/form-demande/form-demande';
import { DemandeRv } from './features/private/demande-rv/demande-rv';
import  {Login} from './features/public/login/login'
export const routes: Routes = [
    { path: 'public', component: Public,
      children: [
        { path: 'login', component: Login },
        { path: 'create-patient', component: CreatePatient },
        { path: '', redirectTo: 'login', pathMatch: 'full' }
      ]

    },
    { path: 'private', component: Private,
      children: [
        { path: 'form-demande', component: FormDemande },
         { path: 'dash', component: Dashboard },
         { path: 'rv', component: Rv },
         { path: 'rv/detail/:id', component: DetailRv },
         { path: 'patient/dossier', component: DossierMedical },
         { path: 'demande-rv', component: DemandeRv },
      ]
    },
    { path: '', redirectTo: '/public/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/public/login' }
   
];