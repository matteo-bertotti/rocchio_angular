import { Component, signal } from '@angular/core';
import { CardPz, Paziente } from '../card-pz/card-pz';

@Component({
  selector: 'app-lista-pz',
  imports: [CardPz],
  templateUrl: './lista-pz.html',
  styleUrl: './lista-pz.scss',
})
export class ListaPz {
  listaPz = signal<Paziente[]>([
    {
      braccialetto: '1',
      codiceColore: 'ROSSO',
      cognome: 'Rocchio',
      eta: 25,
      id: '23',
      nome: 'Pietro',
      note: 'TRauma',
      patologia: 'C19',
    },
    {
      braccialetto: '2',
      codiceColore: 'ARANCIONE',
      cognome: 'Pippone',
      eta: 25,
      id: '69',
      nome: 'Pippo',
      note: 'TRauma',
      patologia: 'C69',
    },
  ]);
}
