import { Component, signal, model, computed, inject } from '@angular/core';
import { CardPz, Paziente } from '../card-pz/card-pz';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TagModule } from 'primeng/tag';

interface Response {
  status: string;
  data: HealthStatus;
};
interface HealthStatus {
  service: string;
  database: string;
  uptime: number;
};

@Component({
  selector: 'app-lista-pz',
  imports: [CardPz, InputTextModule, FormsModule, TagModule],
  templateUrl: './lista-pz.html',
  styleUrl: './lista-pz.scss',
})
export class ListaPz {
  readonly #http = inject(HttpClient);

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
  healthStatus = signal<HealthStatus | null>(null);
  filteredList = computed(() => {
    return this.listaPz().filter((pz) =>
      pz.nome.toLowerCase().includes(this.nomePaziente().toLowerCase()),
    );
  });

  getHealthStatus(){
    this.#http.get<Response>('http://localhost:3000/health').subscribe((res) => {
      console.log(res);
      this.healthStatus.set(res.data);
    });
  };

  constructor() {
    this.getHealthStatus();
  }
}
