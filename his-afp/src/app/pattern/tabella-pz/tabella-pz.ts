import { ChangeDetectionStrategy, Component, effect, inject, model } from '@angular/core';
import { PatientManager } from '../../core/Pazienti/patient-manager';
import { CardPz } from '../../ui/card-pz/card-pz';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'his-tabella-pz',
  imports: [ InputTextModule, FormsModule, CardPz ],
  templateUrl: './tabella-pz.html',
  styleUrl: './tabella-pz.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabellaPz {
  readonly PatientManager = inject(PatientManager);
  nomePaziente = model<string>('');

  constructor() {
    effect(() => {
      this.PatientManager.filterByName(this.nomePaziente());
    });
  }
}
