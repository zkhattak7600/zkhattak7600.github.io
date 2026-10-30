import { Component, HostListener, computed, signal } from '@angular/core';
import { PROJECTS, Project } from '../data/profile';
import { RevealDirective } from '../reveal.directive';
import { SectionLabelComponent } from './section-label';

@Component({
  selector: 'app-projects', standalone: true, imports: [RevealDirective, SectionLabelComponent],
  template: `
  <section id="projects" class="py-28 bg-slate-50 dark:bg-slate-900/40">
    <div class="container-x">
      <div class="text-center mb-10" appReveal>
        <app-label num="04" text="Projects" />
        <h2 class="section-title">Selected <span class="grad-text">Work</span></h2>
      </div>
      <div appReveal class="flex justify-center mb-12">
        <div class="glass inline-flex p-1.5 gap-1">
          @for (f of filters; track f) {
            <button (click)="filter.set(f)" class="px-5 py-2 rounded-xl text-sm font-semibold transition"
              [class]="filter() === f ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600'">{{ f }}</button>
          }
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        @for (pr of shown(); track pr.title) {
          <article (click)="open(pr)" (keydown.enter)="open(pr)" tabindex="0" role="button"
            class="group glass lift overflow-hidden flex flex-col cursor-pointer" [class.lg:col-span-3]="pr.featured" [class.md:col-span-2]="pr.featured">
            @if (pr.images?.length) {
              <!-- browser mockup with real screenshot -->
              <div class="grid lg:grid-cols-2">
                <div class="p-6 sm:p-8 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800">
                  <div class="rounded-xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/20 group-hover:-translate-y-1 group-hover:rotate-[-.5deg] transition duration-500">
                    <div class="flex items-center gap-1.5 px-3 py-2 bg-slate-800">
                      <span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span class="ml-3 flex-1 text-[10px] text-slate-400 bg-slate-900/70 rounded px-2 py-0.5 font-mono">hr-portal / admin / dashboard</span>
                    </div>
                    <img [src]="pr.images![0]" alt="HR Portal dashboard screenshot" class="block w-full" loading="lazy" />
                  </div>
                </div>
                <div class="p-7 sm:p-9 flex flex-col">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">{{ pr.category }}</span>
                    <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-400/15 text-amber-600 dark:text-amber-300">★ Featured</span>
                  </div>
                  <h3 class="font-display text-2xl sm:text-3xl font-bold">{{ pr.title }}</h3>
                  <p class="mt-3 text-slate-600 dark:text-slate-300">{{ pr.description }}</p>
                  <ul class="mt-5 grid sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
                    @for (f of pr.features; track f) { <li class="flex gap-2"><span class="text-emerald-500">✔</span>{{ f }}</li> }
                  </ul>
                  <div class="mt-5 flex flex-wrap gap-2">@for (t of pr.tech; track t) { <span class="chip">{{ t }}</span> }</div>
                  <span class="mt-auto pt-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition">View details & screenshots →</span>
                </div>
              </div>
            } @else {
              <div class="relative h-44 bg-gradient-to-br {{ pr.gradient }} grid place-items-center overflow-hidden">
                <div class="absolute inset-0 grid-bg opacity-40"></div>
                <div class="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/15 blur-sm"></div>
                <div class="absolute -left-6 -top-8 w-28 h-28 rounded-full border-[10px] border-white/10"></div>
                <span class="relative w-20 h-20 rounded-2xl grid place-items-center text-4xl bg-white/15 backdrop-blur ring-1 ring-white/30 shadow-xl group-hover:scale-110 group-hover:rotate-3 transition duration-500">{{ pr.icon }}</span>
                <span class="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/25 text-white backdrop-blur">{{ pr.category }}</span>
              </div>
              <div class="p-6 flex flex-col flex-1">
                <h3 class="font-display text-xl font-semibold">{{ pr.title }}</h3>
                <p class="text-sm font-medium text-indigo-600 dark:text-indigo-400">{{ pr.subtitle }}</p>
                <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ pr.description }}</p>
                <div class="mt-5 flex flex-wrap gap-2">@for (t of pr.tech; track t) { <span class="chip">{{ t }}</span> }</div>
                <span class="mt-auto pt-6 text-sm font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition">View details →</span>
              </div>
            }
          </article>
        }
      </div>
    </div>
  </section>

  @if (sel(); as pr) {
    <div class="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm" (click)="close()">
      <div class="modal-in relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 shadow-2xl" (click)="$event.stopPropagation()" role="dialog" aria-modal="true">
        <button (click)="close()" aria-label="Close" class="absolute top-4 right-4 z-10 w-10 h-10 rounded-full grid place-items-center bg-black/30 text-white hover:bg-black/50">✕</button>
        @if (pr.images?.length) {
          <div class="p-5 sm:p-7 bg-gradient-to-br from-indigo-600 via-violet-600 to-indigo-800">
            <div class="rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <div class="flex items-center gap-1.5 px-3 py-2 bg-slate-800"><span class="w-2.5 h-2.5 rounded-full bg-rose-400"></span><span class="w-2.5 h-2.5 rounded-full bg-amber-400"></span><span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span></div>
              <img [src]="pr.images![img()]" [alt]="pr.title + ' screenshot'" class="block w-full" />
            </div>
            <div class="mt-4 flex gap-2 overflow-x-auto pb-1">
              @for (im of pr.images; track im; let i = $index) {
                <button (click)="img.set(i)" class="shrink-0 w-24 rounded-md overflow-hidden ring-2 transition" [class]="img() === i ? 'ring-white' : 'ring-transparent opacity-60 hover:opacity-100'"><img [src]="im" alt="" class="block w-full" /></button>
              }
            </div>
          </div>
        } @else {
          <div class="relative h-48 bg-gradient-to-br {{ pr.gradient }} grid place-items-center overflow-hidden">
            <div class="absolute inset-0 grid-bg opacity-40"></div>
            <span class="relative w-24 h-24 rounded-3xl grid place-items-center text-5xl bg-white/15 backdrop-blur ring-1 ring-white/30">{{ pr.icon }}</span>
          </div>
        }
        <div class="p-7 sm:p-9">
          <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">{{ pr.category }}</span>
          <h3 class="mt-3 font-display text-3xl font-bold">{{ pr.title }}</h3>
          <p class="text-indigo-600 dark:text-indigo-400 font-medium">{{ pr.subtitle }}</p>
          <p class="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">{{ pr.details || pr.description }}</p>
          @if (pr.features?.length) {
            <h4 class="mt-6 font-semibold">Key features</h4>
            <ul class="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-300">
              @for (f of pr.features; track f) { <li class="flex gap-2"><span class="text-emerald-500">✔</span>{{ f }}</li> }
            </ul>
          }
          <h4 class="mt-6 font-semibold">Tech stack</h4>
          <div class="mt-3 flex flex-wrap gap-2">@for (t of pr.tech; track t) { <span class="chip">{{ t }}</span> }</div>
          @if (pr.links?.length) {
            <div class="mt-8 flex flex-wrap gap-3">
              @for (l of pr.links; track l.url) { <a [href]="l.url" target="_blank" rel="noopener" class="btn-primary !py-2.5 !px-5 text-sm">GitHub · {{ l.label }} ↗</a> }
            </div>
          } @else {
            <p class="mt-8 text-sm text-slate-400">Source code is proprietary / not publicly available.</p>
          }
        </div>
      </div>
    </div>
  }`,
})
export class ProjectsComponent {
  filters = ['All', 'Professional', 'Personal'] as const;
  filter = signal<'All' | 'Professional' | 'Personal'>('All');
  shown = computed(() => this.filter() === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === this.filter()));
  sel = signal<Project | null>(null);
  img = signal(0);
  open(p: Project) { this.img.set(0); this.sel.set(p); document.body.style.overflow = 'hidden'; }
  close() { this.sel.set(null); document.body.style.overflow = ''; }
  @HostListener('document:keydown.escape') onEsc() { if (this.sel()) this.close(); }
}
