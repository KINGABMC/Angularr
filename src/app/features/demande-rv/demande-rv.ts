import { Component } from '@angular/core';
import { FormDemande } from './form-demande/form-demande';
import { ListDemande } from './list-demande/list-demande';
@Component({
  selector: 'app-demande-rv',
  imports: [FormDemande, ListDemande],
  templateUrl: './demande-rv.html',
  styleUrl: './demande-rv.css',
})
export class DemandeRv {

}
