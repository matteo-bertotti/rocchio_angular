import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'his-darckmode-selector',
  imports: [ButtonModule],
  templateUrl: './darkmode-selector.component.html',
  styleUrl: './darkmode-selector.component.scss',
})
export class DarkmodeSelector {
  isDark = false;

  ngOnInit() {
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      this.isDark = true;
      document.querySelector('html')?.classList.add('my-app-dark');
    }
  }

  toggleDarkMode() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    this.isDark = !this.isDark;
    localStorage.setItem('darkMode', String(this.isDark));
  }
}
