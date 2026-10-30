import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';
import { RevealDirective } from '../reveal.directive';
import { SectionLabelComponent } from './section-label';

@Component({
  selector: 'app-about', standalone: true, imports: [RevealDirective, SectionLabelComponent],
  template: `
  <section id="about" class="py-28">
    <div class="container-x grid lg:grid-cols-2 gap-14 items-center">
      <div appReveal>
        <app-label num="01" text="About" />
        <h2 class="section-title">Turning ideas into <span class="grad-text">polished web apps</span></h2>
        <div class="mt-6 space-y-4 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          @for (line of p.summary; track $index) { <p>{{ line }}</p> }
        </div>
        <div class="mt-8">
          <p class="text-sm font-semibold text-slate-500 mb-3">When I'm not coding</p>
          <div class="flex flex-wrap gap-2">@for (i of p.interests; track i) { <span class="glass px-3.5 py-1.5 text-sm font-medium">{{ i }}</span> }</div>
        </div>
      </div>
      <div class="grid sm:grid-cols-2 gap-5">
        @for (h of highlights; track h.title; let i = $index) {
          <div appReveal [revealDelay]="i * 100" class="glass lift p-6" [class.sm:translate-y-8]="i % 2 === 1">
            <div class="w-12 h-12 rounded-xl grid place-items-center text-2xl bg-gradient-to-br from-indigo-500/15 to-violet-500/15 mb-4">{{ h.icon }}</div>
            <h3 class="font-semibold text-lg">{{ h.title }}</h3>
            <p class="mt-1.5 text-sm text-slate-500 dark:text-slate-400">{{ h.text }}</p>
          </div>
        }
      </div>
    </div>
  </section>`,
})
export class AboutComponent {
  p = PROFILE;
  highlights = [
    { icon: '🧩', title: 'Requirement Gathering', text: 'Understanding client needs and turning them into clear, buildable features.' },
    { icon: '🗺️', title: 'Planning', text: 'Breaking work into well-scoped tasks and delivering on time.' },
    { icon: '⚡', title: 'Execution & Development', text: 'Writing clean, maintainable Angular & TypeScript code.' },
    { icon: '✅', title: 'Quality First', text: 'Fixing bugs, refining UX and always learning to raise the bar.' },
  ];
}
