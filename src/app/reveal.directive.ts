import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  private io?: IntersectionObserver;
  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnInit() {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    node.style.transitionDelay = `${this.revealDelay}ms`;
    if (typeof IntersectionObserver === 'undefined') { node.classList.add('visible'); return; }
    this.io = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) { node.classList.add('visible'); this.io?.disconnect(); }
    }), { threshold: 0.1 });
    this.io.observe(node);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}

@Directive({ selector: '[appCount]', standalone: true })
export class CountUpDirective implements OnInit, OnDestroy {
  @Input('appCount') target = 0;
  @Input() countSuffix = '';
  private io?: IntersectionObserver;
  constructor(private el: ElementRef<HTMLElement>) {}
  ngOnInit() {
    const node = this.el.nativeElement;
    node.textContent = '0' + this.countSuffix;
    const run = () => {
      const start = performance.now(), dur = 1400;
      const step = (t: number) => {
        const p = Math.min(1, (t - start) / dur), eased = 1 - Math.pow(1 - p, 3);
        node.textContent = Math.round(this.target * eased) + this.countSuffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    if (typeof IntersectionObserver === 'undefined') { run(); return; }
    this.io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { run(); this.io?.disconnect(); } }), { threshold: 0.5 });
    this.io.observe(node);
  }
  ngOnDestroy() { this.io?.disconnect(); }
}
