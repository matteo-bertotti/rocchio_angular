import { Component, input} from '@angular/core';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { JsonPipe } from '@angular/common';

export interface Paziente {
  id: string;
  nome: string;
  cognome: string;
  braccialetto: string;
  eta: number;
  codiceColore: string;
  note: string;
  patologia: string;
}

@Component({
  selector: 'app-card-pz',
  imports: [CardModule, Button, JsonPipe],
  templateUrl: './card-pz.html',
  styleUrl: './card-pz.scss',
})
export class CardPz {
  paziente = input.required<Paziente>();
  // Uso local interno componente
  // paziente = signal<Paziente>({
  //   braccialetto: '123',
  //   codiceColore: 'ROSSO',
  //   cognome: 'Rocchio',
  //   eta: 25,
  //   id: '23',
  //   nome: 'Pietro',
  //   note: 'TRauma',
  //   patologia: 'C19',
  // });

  setColoreDiStato() {
    switch (this.paziente().codiceColore) {
      case 'ROSSO':
        return 'border-red-600';
      case 'ARANCIONE':
        return 'border-yellow-600';
      case 'AZZURRO':
        return 'border-blue-600';
      case 'VERDE':
        return 'border-green-600';
      case 'BIANCO':
        return 'border-white-600';
      default:
        return '';
    }
  }
}

