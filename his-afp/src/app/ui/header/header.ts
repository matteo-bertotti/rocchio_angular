import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "primeng/button";
import { Divider } from 'primeng/divider';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'his-header',
  imports: [Button, RouterLink, DarkmodeSelector, Divider],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  reparto = environment.reparto;
  struttura = environment.struttura;
}
