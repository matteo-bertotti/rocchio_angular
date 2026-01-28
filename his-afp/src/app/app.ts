import { Component, signal } from '@angular/core';
import { DarkmodeSelector } from './darkmode-selector/darkmode-selector.component';
import { CardPz } from './card-pz/card-pz';

@Component({
  selector: 'app-root',
  imports: [DarkmodeSelector, DarkmodeSelector, CardPz],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('his-afp');
}
