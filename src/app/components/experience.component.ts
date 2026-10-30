import { Component } from '@angular/core';
import { EDUCATION, EXPERIENCE } from '../data/profile';
import { RevealDirective } from '../reveal.directive';
import { SectionLabelComponent } from './section-label';

@Component({
  selector: 'app-experience', standalone: true, imports: [RevealDirective, SectionLabelComponent],
  template: `
  <section id="experience" class="py-28">
    <div class="container-x">
      <div class="text-center mb-16" appReveal>
        <app-label num="03" text="Experience" />
        <h2 class="section-title">Where I've <span class="grad-text">Worked</span></h2>
      </div>
      <div class="grid lg:grid-cols-[1.7fr,1fr] gap-12">
        <ol class="relative ml-4 border-l border-indigo-500/30 space-y-8">
          @for (e of exp; track e.company; let i = $index) {
            <li appReveal [revealDelay]="i * 120" class="relative pl-10">
              <span class="absolute -left-[9px] top-7 w-[18px] h-[18px] rounded-full bg-indigo-600 ring-[5px] ring-indigo-500/20"></span>
              <div class="glass lift p-7">
                <div class="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 class="font-display text-xl font-semibold">{{ e.role }}</h3>
                    <p class="font-medium text-indigo-600 dark:text-indigo-400">{{ e.company }} <span class="text-slate-400">· {{ e.location }}</span></p>
                  </div>
                  <div class="flex items-center gap-2">
                    @if (e.current) { <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">Current</span> }
                    <span class="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-500">{{ e.period }}</span>
                  </div>
                </div>
                <ul class="mt-4 space-y-2 text-slate-600 dark:text-slate-300">
                  @for (pt of e.points; track pt) { <li class="flex gap-3"><span class="text-indigo-500 mt-1 text-xs">◆</span><span>{{ pt }}</span></li> }
                </ul>
                <div class="mt-5 flex flex-wrap gap-2">@for (t of e.tech; track t) { <span class="chip">{{ t }}</span> }</div>
              </div>
            </li>
          }
        </ol>
        <div>
          <h3 appReveal class="font-display text-xl font-semibold mb-5 flex items-center gap-2">🎓 Education</h3>
          <div class="space-y-5">
            @for (ed of edu; track ed.degree; let i = $index) {
              <div appReveal [revealDelay]="i * 120" class="glass lift p-6 relative overflow-hidden">
                <div class="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-violet-500"></div>
                <h4 class="font-semibold text-lg">{{ ed.degree }}</h4>
                <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">{{ ed.school }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </section>`,
})
export class ExperienceComponent { exp = EXPERIENCE; edu = EDUCATION; }
