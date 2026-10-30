import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-label', standalone: true,
  template: `<span class="label">{{ num }} <span class="text-slate-400">/</span> {{ text }}</span>`,
})
export class SectionLabelComponent { @Input() num = '01'; @Input() text = ''; }
