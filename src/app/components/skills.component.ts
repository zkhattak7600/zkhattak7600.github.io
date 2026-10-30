import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../data/profile';
import { RevealDirective } from '../reveal.directive';
import { SectionLabelComponent } from './section-label';

@Component({
  selector: 'app-skills', standalone: true, imports: [RevealDirective, SectionLabelComponent],
  template: `
  <section id="skills" class="py-28 bg-slate-50 dark:bg-slate-900/40">
    <div class="container-x">
      <div class="text-center mb-14" appReveal>
        <app-label num="02" text="Skills" />
        <h2 class="section-title">My <span class="grad-text">Tech Stack</span></h2>
      </div>
      <div class="grid lg:grid-cols-3 gap-6">
        @for (g of groups; track g.title; let gi = $index) {
          <div appReveal [revealDelay]="gi * 120" class="glass lift p-7">
            <div class="flex items-center gap-3 mb-6">
              <span class="w-11 h-11 rounded-xl grid place-items-center text-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30">{{ g.icon }}</span>
              <h3 class="font-display text-xl font-semibold">{{ g.title }}</h3>
            </div>
            <ul class="space-y-4">
              @for (s of g.skills; track s.name) {
                <li>
                  <div class="flex items-center justify-between text-sm mb-1.5">
                    <span class="flex items-center gap-2 font-medium">
                      @if (s.icon) { <img [src]="s.icon" alt="" class="w-4 h-4" loading="lazy" /> } @else { <span class="w-4 h-4 rounded bg-indigo-500/30"></span> }
                      {{ s.name }}
                    </span>
                    <span class="text-xs font-mono text-slate-400">{{ s.level }}%</span>
                  </div>
                  <div class="h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                    <div class="bar h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500" [style.--w]="s.level + '%'"></div>
                  </div>
                </li>
              }
            </ul>
          </div>
        }
      </div>
    </div>
  </section>`,
  styles: [`.bar { width: 0; transition: width 1.2s cubic-bezier(.2,.7,.2,1) .2s; } :host ::ng-deep .visible .bar { width: var(--w); }`],
})
export class SkillsComponent { groups = SKILL_GROUPS; }
