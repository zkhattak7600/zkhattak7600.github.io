import { Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../theme.service';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-navbar', standalone: true,
  template: `
  <div class="fixed top-0 left-0 z-[60] h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 transition-[width] duration-75" [style.width.%]="progress()"></div>
  <header class="fixed top-0 inset-x-0 z-50 transition-all duration-300"
    [class]="scrolled() ? 'bg-white/75 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200/70 dark:border-white/10 shadow-sm' : 'bg-transparent'">
    <nav class="container-x h-16 flex items-center justify-between">
      <a href="#home" class="flex items-center gap-2 font-extrabold text-lg">
        <span class="w-9 h-9 rounded-xl grid place-items-center text-white text-sm bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30">{{ p.initials }}</span>
        <span class="hidden sm:inline">Zain<span class="grad-text">.dev</span></span>
      </a>
      <ul class="hidden md:flex gap-1 text-sm font-medium">
        @for (l of links; track l.id) {
          <li><a [href]="'#' + l.id" class="px-3.5 py-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-500/10 transition"><span class="font-mono text-indigo-500 text-xs mr-1">0{{ $index + 1 }}.</span>{{ l.label }}</a></li>
        }
      </ul>
      <div class="flex items-center gap-2">
        <a href="#contact" class="hidden lg:inline-flex text-sm font-semibold px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-600/25">Hire Me</a>
        <button (click)="theme.toggle()" aria-label="Toggle theme" class="w-10 h-10 rounded-xl grid place-items-center border border-slate-200 dark:border-white/10 hover:border-indigo-400 transition text-lg">{{ theme.dark() ? '☀️' : '🌙' }}</button>
        <button (click)="open.set(!open())" class="md:hidden w-10 h-10 rounded-xl grid place-items-center border border-slate-200 dark:border-white/10 text-xl" aria-label="Menu">{{ open() ? '✕' : '☰' }}</button>
      </div>
    </nav>
    @if (open()) {
      <ul class="md:hidden container-x pb-4 flex flex-col gap-1 font-medium bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
        @for (l of links; track l.id) { <li><a [href]="'#' + l.id" (click)="open.set(false)" class="block px-3 py-2.5 rounded-lg hover:bg-indigo-500/10">{{ l.label }}</a></li> }
      </ul>
    }
  </header>
  @if (progress() > 8) {
    <a href="#home" aria-label="Back to top" class="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-2xl grid place-items-center text-white text-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-xl shadow-indigo-600/40 hover:-translate-y-1 transition">↑</a>
  }`,
})
export class NavbarComponent {
  theme = inject(ThemeService);
  p = PROFILE;
  open = signal(false);
  scrolled = signal(false);
  progress = signal(0);
  links = [
    { id: 'about', label: 'About' }, { id: 'skills', label: 'Skills' }, { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' }, { id: 'contact', label: 'Contact' },
  ];
  @HostListener('window:scroll')
  onScroll() {
    const h = document.documentElement;
    const max = h.scrollHeight - h.clientHeight;
    this.progress.set(max > 0 ? (h.scrollTop / max) * 100 : 0);
    this.scrolled.set(h.scrollTop > 20);
  }
}
