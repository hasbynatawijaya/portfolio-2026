import { Component } from '@/core/Component';

export class Projects extends Component {
  render(): string {
    return `
      <section id="projects" class="section">
        <div class="container">
          <div class="scroll-reveal-up">
            <div class="font-mono text-sm text-brutalist-accent mb-2">[003]</div>
            <h2 class="heading-brutalist-lg mb-4">Featured Projects</h2>
            <p class="text-lg text-brutalist-gray mb-12 max-w-2xl">
              Case studies showcasing my problem-solving approach, technical decisions, and measurable impact.
            </p>
          </div>

          <div class="max-w-2xl mx-auto scroll-reveal-up">
            <div class="terminal-brutalist text-center p-12">
              <div class="font-display text-4xl font-black mb-4">COMING SOON</div>
              <p class="font-mono text-sm text-brutalist-gray">
                Detailed case studies are being prepared. Check back later!
              </p>
            </div>
          </div>

          <div class="mt-12 text-center scroll-reveal-up">
            <p class="font-mono text-sm text-brutalist-gray mb-4">
              Interested in my work?
            </p>
            <a href="/#contact" data-link class="btn-brutalist-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    `;
  }
}
