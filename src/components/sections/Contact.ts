import { Component } from '@/core/Component';

export class Contact extends Component {
  render(): string {
    return `
      <section id="contact" class="section">
        <div class="container">
          <div class="max-w-4xl mx-auto">
            <div class="scroll-reveal-up text-center">
              <div class="font-mono text-sm text-brutalist-accent mb-2">[005]</div>
              <h2 class="heading-brutalist-lg mb-6">Let's Work Together</h2>
              <p class="text-xl mb-12 text-brutalist-gray max-w-2xl mx-auto">
                I'm currently open to new opportunities where I can contribute to innovative projects
                and continue growing as a technical leader.
              </p>
            </div>

            <!-- Contact Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <a
                href="mailto:mhasbyn@gmail.com"
                class="card-brutalist-hover p-6 text-center group"
              >
                <div class="font-display text-4xl mb-3">📧</div>
                <h3 class="font-display font-bold mb-2">Email</h3>
                <p class="font-mono text-sm text-brutalist-accent">mhasbyn@gmail.com</p>
              </a>

              <a
                href="https://linkedin.com/in/hasbynatawijaya"
                target="_blank"
                rel="noopener noreferrer"
                class="card-brutalist-hover p-6 text-center group"
              >
                <div class="font-display text-4xl mb-3">💼</div>
                <h3 class="font-display font-bold mb-2">LinkedIn</h3>
                <p class="font-mono text-sm text-brutalist-accent">Connect with me</p>
              </a>

              <a
                href="https://github.com/hasbynatawijaya"
                target="_blank"
                rel="noopener noreferrer"
                class="card-brutalist-hover p-6 text-center group"
              >
                <div class="font-display text-4xl mb-3">💻</div>
                <h3 class="font-display font-bold mb-2">GitHub</h3>
                <p class="font-mono text-sm text-brutalist-accent">Check my code</p>
              </a>
            </div>

            <!-- CTA -->
            <div class="card-brutalist-accent p-8 text-center scroll-reveal-up">
              <h3 class="font-display text-2xl font-bold mb-4">Interested in working together?</h3>
              <p class="text-lg mb-6 text-brutalist-gray">
                Download my CV or get in touch to discuss how I can contribute to your team.
              </p>
              <div class="flex flex-wrap justify-center gap-4">
                <a href="/assets/docs/Hasby_CV_2026.pdf" download class="btn-brutalist-primary">
                  Download CV (PDF)
                </a>
                <a href="mailto:mhasbyn@gmail.com" class="btn-brutalist">
                  Send me an email
                </a>
              </div>
            </div>

            <!-- Additional Info -->
            <div class="mt-12 text-center">
              <div class="terminal-brutalist inline-block text-left">
                <p class="terminal-brutalist-line mb-2">Location: Jakarta, Indonesia</p>
                <p class="terminal-brutalist-line mb-2">Status: Open to opportunities</p>
                <p class="terminal-brutalist-line mb-2">Experience: 7+ years</p>
                <p class="terminal-brutalist-line">Specialization: React, TypeScript, Micro-frontends</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
