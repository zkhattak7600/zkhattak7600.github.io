import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  dark = signal(true);
  constructor() {
    const saved = localStorage.getItem('theme');
    this.set(saved ? saved === 'dark' : true);
  }
  toggle() { this.set(!this.dark()); }
  set(d: boolean) {
    this.dark.set(d);
    document.documentElement.classList.toggle('dark', d);
    localStorage.setItem('theme', d ? 'dark' : 'light');
  }
}
