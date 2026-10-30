import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { PROFILE } from '../data/profile';
import { CountUpDirective, RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-hero', standalone: true, imports: [RevealDirective, CountUpDirective],
  template: `
  <section id="home" class="relative min-h-screen flex items-center pt-28 pb-24 overflow-hidden">
    <div class="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
    <div class="blob w-[30rem] h-[30rem] bg-indigo-600 -top-32 -left-32"></div>
    <div class="blob w-[26rem] h-[26rem] bg-violet-600 top-1/3 -right-32" style="animation-delay:-5s"></div>

    <div class="container-x relative grid lg:grid-cols-[1.25fr,1fr] gap-14 items-center">
      <div>
        <div appReveal class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm font-medium mb-8">
          <span class="relative flex w-2.5 h-2.5"><span class="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span><span class="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-500"></span></span>
          Available for work · {{ p.location }}
        </div>
        <p appReveal [revealDelay]="80" class="font-mono text-indigo-600 dark:text-indigo-400 font-semibold mb-3">Hello, I'm</p>
        <h1 appReveal [revealDelay]="120" class="font-display text-5xl sm:text-7xl xl:text-[5.5rem] font-extrabold tracking-tight leading-[1.02]">
          Zain<br /><span class="grad-text">Ul Abideen</span>
        </h1>
        <p appReveal [revealDelay]="200" class="mt-6 font-display text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200 h-10">
          {{ typed() }}<span class="caret text-indigo-500 font-light">|</span>
        </p>
        <p appReveal [revealDelay]="280" class="mt-5 max-w-xl text-lg leading-relaxed text-slate-500 dark:text-slate-400">{{ p.tagline }}</p>
        <div appReveal [revealDelay]="360" class="mt-10 flex flex-wrap gap-4">
          <a href="#contact" class="btn-primary">Hire Me <span>→</span></a>
          <a [href]="p.cvUrl" target="_blank" download="Zain-Ul-Abideen-CV.pdf" class="btn-outline">Download CV <span>⬇</span></a>
        </div>
        <div appReveal [revealDelay]="440" class="mt-14 flex gap-8 sm:gap-12">
          @for (s of p.stats; track s.label) {
            <div>
              <div class="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white" [appCount]="s.value" [countSuffix]="s.suffix"></div>
              <div class="mt-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400">{{ s.label }}</div>
            </div>
          }
        </div>
      </div>

      <!-- abstract orb + code window -->
      <div appReveal [revealDelay]="250" class="relative h-[26rem] sm:h-[30rem] hidden md:block">
        <div class="absolute inset-0 m-auto w-80 h-80 rounded-full border border-indigo-400/20 spin-slow">
          <span class="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_20px_#38bdf8]"></span>
        </div>
        <div class="absolute inset-0 m-auto w-[25rem] h-[25rem] rounded-full border border-violet-400/10 spin-slow" style="animation-direction:reverse;animation-duration:30s">
          <span class="absolute top-1/2 -right-1.5 w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_16px_#a78bfa]"></span>
        </div>
        <div class="orb float absolute inset-0 m-auto w-56 h-56 rounded-full"></div>
        <div class="float absolute right-0 bottom-6 w-72 rounded-2xl overflow-hidden border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl shadow-indigo-900/40" style="animation-delay:-3s">
          <div class="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span class="w-3 h-3 rounded-full bg-rose-400"></span><span class="w-3 h-3 rounded-full bg-amber-400"></span><span class="w-3 h-3 rounded-full bg-emerald-400"></span>
            <span class="ml-3 text-xs text-slate-400 font-mono">developer.ts</span>
          </div>
          <pre class="p-4 text-[12.5px] leading-6 font-mono text-slate-300"><span class="text-violet-400">const</span> <span class="text-sky-300">zain</span> = {{ '{' }}
  role: <span class="text-emerald-300">'Angular Dev'</span>,
  experience: <span class="text-amber-300">'5+ yrs'</span>,
  stack: [<span class="text-emerald-300">'Angular'</span>, <span class="text-emerald-300">'TS'</span>],
  coffee: <span class="text-violet-400">true</span>
{{ '}' }};</pre>
        </div>
        <div class="float absolute left-0 top-10 glass px-4 py-3 shadow-xl bg-white/80 dark:bg-slate-900/70" style="animation-delay:-1.5s">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" class="w-8 h-8 inline-block mr-2" alt="" />
          <span class="font-semibold text-sm">Angular 15+</span>
        </div>
      </div>
    </div>

    <a href="#about" aria-label="Scroll down" class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-slate-400 hover:text-indigo-500">
      <span class="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2"><span class="scroll-dot w-1 h-2 rounded-full bg-current"></span></span>
      Scroll
    </a>
  </section>`,
})
export class HeroComponent implements OnInit, OnDestroy {
  p = PROFILE;
  typed = signal('');
  private timer?: ReturnType<typeof setTimeout>;
  private ri = 0; private ci = 0; private deleting = false;
  ngOnInit() { this.tick(); }
  ngOnDestroy() { clearTimeout(this.timer); }
  private tick() {
    const word = this.p.roles[this.ri];
    this.ci += this.deleting ? -1 : 1;
    this.typed.set(word.slice(0, this.ci));
    let delay = this.deleting ? 45 : 95;
    if (!this.deleting && this.ci === word.length) { this.deleting = true; delay = 1600; }
    else if (this.deleting && this.ci === 0) { this.deleting = false; this.ri = (this.ri + 1) % this.p.roles.length; delay = 350; }
    this.timer = setTimeout(() => this.tick(), delay);
  }
}
