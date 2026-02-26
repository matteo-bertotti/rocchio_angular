import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { healthStatus, healthStatusMock } from './healthStatus.model';
import { APIResponse } from '../models/APIResponse.model';

@Injectable({
  providedIn: 'root',
})
export class SystemStatus {
  readonly #http = inject(HttpClient);
  #statoAPI = signal<healthStatus>(healthStatusMock);

  statoAPI = this.#statoAPI.asReadonly();

  public fetchStatoAPI() {
    this.#http.get<APIResponse<healthStatus>>('http://localhost:3000/health')
    .subscribe({
      next: (res) => {
        this.#statoAPI.set(res.data);
      },
      error: (err) => {
        console.error(err);
        this.#statoAPI.set(healthStatusMock);
      },
    });
  }

}
