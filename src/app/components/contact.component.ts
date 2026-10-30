import { Component } from '@angular/core';
import { PROFILE } from '../data/profile';
import { RevealDirective } from '../reveal.directive';
import { SectionLabelComponent } from './section-label';

@Component({
  selector: 'app-contact', standalone: true, imports: [RevealDirective, SectionLabelComponent],
  template: `
  <section id="contact" class="py-28 relative overflow-hidden">
    <div class="blob w-[26rem] h-[26rem] bg-indigo-600 -bottom-40 -left-32"></div>
    <div class="blob w-[22rem] h-[22rem] bg-violet-600 -top-20 -right-24" style="animation-delay:-6s"></div>
    <div class="container-x relative">
      <div class="text-center mb-14" appReveal>
        <app-label num="05" text="Contact" />
        <h2 class="section-title">Let's build something <span class="grad-text">great together</span></h2>
        <p class="mt-4 text-lg text-slate-500 dark:text-slate-400">Have a project or an opportunity in mind? My inbox is always open.</p>
      </div>
      <div class="grid md:grid-cols-[1fr,1.3fr] gap-8">
        <div appReveal class="space-y-4">
          @for (c of contacts; track c.label) {
            <a [href]="c.href" target="_blank" rel="noopener" class="glass lift p-5 flex items-center gap-4">
              <span class="w-12 h-12 rounded-xl grid place-items-center text-xl text-white bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30">{{ c.icon }}</span>
              <span><span class="block text-xs uppercase tracking-wider text-slate-500">{{ c.label }}</span><span class="font-semibold break-all">{{ c.value }}</span></span>
            </a>
          }
        </div>
        <form appReveal [revealDelay]="150" [attr.action]="p.formspreeEndpoint" method="POST" class="glass p-6 sm:p-8 space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" class="field" />
            <input name="email" type="email" required placeholder="Your email" class="field" />
          </div>
          <input name="subject" placeholder="Subject" class="field" />
          <textarea name="message" rows="5" required placeholder="Your message" class="field"></textarea>
          <button type="submit" class="btn-primary w-full justify-center">Send Message ✈</button>
        </form>
      </div>
    </div>
  </section>
  <footer class="py-10 border-t border-slate-200 dark:border-white/10">
    <div class="container-x flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
      <span>© {{ year }} <span class="font-semibold grad-text">{{ p.name }}</span> · {{ p.location }}</span>
      <span><a [href]="p.phoneHref" class="hover:text-indigo-500">☎ {{ p.phone }}</a> · <a [href]="'mailto:' + p.email" class="hover:text-indigo-500">{{ p.email }}</a></span>
    </div>
  </footer>`,
  styles: [`.field { width:100%; border-radius:.75rem; padding:.8rem 1rem; background:rgba(148,163,184,.08); border:1px solid rgba(148,163,184,.3); outline:none; transition:border-color .2s, box-shadow .2s; }
    .field:focus { border-color:#6366f1; box-shadow:0 0 0 4px rgba(99,102,241,.2); }`],
})
export class ContactComponent {
  p = PROFILE;
  year = new Date().getFullYear();
  contacts = [
    { icon: '✉', label: 'Email', value: PROFILE.email, href: 'mailto:' + PROFILE.email },
    { icon: '☎', label: 'Phone', value: PROFILE.phone, href: PROFILE.phoneHref },
    { icon: '⌘', label: 'GitHub', value: 'github.com/zkhattak7600', href: PROFILE.github },
    { icon: 'in', label: 'LinkedIn', value: 'LinkedIn profile', href: PROFILE.linkedin },
    { icon: '📍', label: 'Location', value: PROFILE.location, href: 'https://maps.google.com/?q=Lahore,Pakistan' },
  ];
}
