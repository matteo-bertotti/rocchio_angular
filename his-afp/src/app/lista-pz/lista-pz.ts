import { Component, signal, model, computed, inject } from '@angular/core';
import { CardPz, Paziente } from '../card-pz/card-pz';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { SystemStatus } from '../core/systemStatus/system-status';
import { healthStatus } from '../core/systemStatus/healthStatus.model';
import { StatoApi } from "../ui/stato-api/stato-api";

interface Response {
  status: string;
  data: healthStatus;
};


@Component({
  selector: 'app-lista-pz',
  imports: [CardPz, InputTextModule, FormsModule, TagModule, StatoApi],
  templateUrl: './lista-pz.html',
  styleUrl: './lista-pz.scss',
})
export class ListaPz {
  nomePaziente = model<string>('');

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

  

  filteredList = computed(() => {
    return this.listaPz().filter((pz) =>
      pz.nome.toLowerCase().includes(this.nomePaziente().toLowerCase()),
    );
  });


}
