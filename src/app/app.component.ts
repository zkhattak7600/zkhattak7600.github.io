import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { SkillsComponent } from './components/skills.component';
import { ExperienceComponent } from './components/experience.component';
import { ProjectsComponent } from './components/projects.component';
import { ContactComponent } from './components/contact.component';
import { SocialBarComponent } from './components/social-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, ContactComponent, SocialBarComponent],
  template: `<app-navbar /><app-social-bar /><main class="overflow-x-hidden"><app-hero /><app-about /><app-skills /><app-experience /><app-projects /><app-contact /></main>`,
})
export class AppComponent {}
