import { Component } from '@/core/Component';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Contact } from '@/components/sections/Contact';
import { scrollReveal } from '@/components/animations/ScrollReveal';

export class HomePage extends Component {
  private sections: Component[] = [];

  render(): string {
    return `
      <div class="home-page">
        <div id="hero-section"></div>
        <div id="about-section"></div>
        <div id="experience-section"></div>
        <div id="projects-section"></div>
        <div id="skills-section"></div>
        <div id="contact-section"></div>
      </div>
    `;
  }

  onMount(): void {
    const hero = new Hero();
    hero.mount(this.$('#hero-section')!);
    this.sections.push(hero);

    const about = new About();
    about.mount(this.$('#about-section')!);
    this.sections.push(about);

    const experience = new Experience();
    experience.mount(this.$('#experience-section')!);
    this.sections.push(experience);

    const projects = new Projects();
    projects.mount(this.$('#projects-section')!);
    this.sections.push(projects);

    const skills = new Skills();
    skills.mount(this.$('#skills-section')!);
    this.sections.push(skills);

    const contact = new Contact();
    contact.mount(this.$('#contact-section')!);
    this.sections.push(contact);

    setTimeout(() => {
      scrollReveal.observeAll('.scroll-reveal-up');
      scrollReveal.observeAll('.scroll-reveal-down');
      scrollReveal.observeAll('.scroll-reveal-left');
      scrollReveal.observeAll('.scroll-reveal-right');
    }, 100);
  }

  onDestroy(): void {
    this.sections.forEach((section) => section.destroy());
    this.sections = [];
  }
}

export default HomePage;
