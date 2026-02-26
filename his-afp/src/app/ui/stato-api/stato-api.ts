import { Component, inject } from '@angular/core';
import { SystemStatus } from '../../core/systemStatus/system-status';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-stato-api',
  imports: [TagModule],
  templateUrl: './stato-api.html',
  styleUrl: './stato-api.scss',
})
export class StatoApi {
  healthStatus = inject(SystemStatus).statoAPI;
}
