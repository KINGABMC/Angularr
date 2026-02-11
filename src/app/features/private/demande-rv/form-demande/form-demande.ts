import { Component } from '@angular/core';
import { SpécialiteModel } from '../models/demande.model';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-form-demande',
  imports: [RouterLink],
  templateUrl: './form-demande.html',
  styleUrl: './form-demande.css',
})
export class FormDemande {
  public readonly specialites: SpécialiteModel[] = [
    'Cardiologie',
    'Ophtalmologie',
    'Orthopédie',
    'Pédiatrie'
  ];
}
