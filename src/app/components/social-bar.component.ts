import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';

@Component({
  selector: 'app-social-bar', standalone: true,
  template: `
  <aside class="hidden xl:flex fixed left-8 bottom-0 z-40 flex-col items-center gap-5 text-slate-500 dark:text-slate-400">
    <a [href]="p.github" target="_blank" rel="noopener" aria-label="GitHub" title="GitHub" class="hover:text-indigo-500 hover:-translate-y-1 transition">
      <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
    </a>
    <a [href]="'mailto:' + p.email" aria-label="Email" title="Email" class="hover:text-indigo-500 hover:-translate-y-1 transition">
      <svg viewBox="0 0 24 24" class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
    </a>
    <a [href]="p.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" title="LinkedIn" class="hover:text-indigo-500 hover:-translate-y-1 transition">
      <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z"/></svg>
    </a>
    <span class="w-px h-24 bg-slate-300 dark:bg-white/20"></span>
  </aside>
  <aside class="hidden xl:flex fixed right-8 bottom-0 z-40 flex-col items-center gap-6">
    <a [href]="'mailto:' + p.email" class="font-mono text-xs tracking-widest text-slate-500 dark:text-slate-400 hover:text-indigo-500 [writing-mode:vertical-rl]">{{ p.email }}</a>
    <span class="w-px h-24 bg-slate-300 dark:bg-white/20"></span>
  </aside>`,
})
export class SocialBarComponent { p = PROFILE; }
