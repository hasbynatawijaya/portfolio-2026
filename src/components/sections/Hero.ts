import { Component } from '@/core/Component';
import { TextScramble } from '@/components/animations/TextScramble';
import { MagneticButton } from '@/components/animations/MagneticButton';

export class Hero extends Component {
  private textScramble: TextScramble | null = null;
  private magneticButtons: MagneticButton[] = [];

  render(): string {
    return `
      <section id="hero" class="hero min-h-screen flex items-center justify-center relative overflow-hidden bg-grid">
        <div class="container relative z-10">
          <div class="max-w-5xl">
            <!-- Name with Text Scramble -->
            <h1 class="heading-brutalist-xl mb-6" id="hero-name">
              HASBY NATAWIJAYA
            </h1>

            <!-- Title -->
            <h2 class="text-3xl md:text-5xl font-display font-bold mb-6">
              <span class="text-brutalist-black dark:text-brutalist-white">Senior Frontend Engineer</span>
            </h2>

            <!-- Tagline -->
            <p class="text-xl md:text-2xl font-sans mb-12 max-w-3xl">
              Crafting performant, scalable web experiences for fintech and travel tech.
              <span class="text-brutalist-accent">9 years</span> of turning complex problems into elegant solutions.
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap gap-4">
              <a href="/#projects" data-link class="btn-brutalist-primary magnetic-btn">
                View My Work
              </a>
              <a href="/#contact" data-link class="btn-brutalist magnetic-btn">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
          <div class="font-mono text-sm mb-2 text-brutalist-gray">Scroll Down</div>
          <div class="w-6 h-10 border-brutalist border-brutalist-black dark:border-brutalist-white rounded-full mx-auto">
            <div class="w-2 h-2 bg-brutalist-accent rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>
    `;
  }

  onMount(): void {
    const nameElement = this.element?.querySelector('#hero-name');
    if (nameElement) {
      this.textScramble = new TextScramble(nameElement as HTMLElement);
      setTimeout(() => {
        this.textScramble?.animate('HASBY NATAWIJAYA');
      }, 500);
    }

    const magneticBtns = this.element?.querySelectorAll('.magnetic-btn');
    if (magneticBtns) {
      magneticBtns.forEach((btn) => {
        this.magneticButtons.push(new MagneticButton(btn as HTMLElement, 0.25));
      });
    }
  }

  onDestroy(): void {
    this.textScramble?.stop();
    this.magneticButtons.forEach((btn) => btn.destroy());
  }
}
