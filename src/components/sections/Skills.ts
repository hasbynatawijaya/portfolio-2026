import { Component } from '@/core/Component';
import { skillCategories } from '@/data/skills';

export class Skills extends Component {
  render(): string {
    return `
      <section id="skills" class="section bg-brutalist-white dark:bg-brutalist-black">
        <div class="container">
          <div class="scroll-reveal-up">
            <div class="font-mono text-sm text-brutalist-accent mb-2">[004]</div>
            <h2 class="heading-brutalist-lg mb-12">Technical Skills</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${skillCategories.map((category, index) => this.renderCategory(category, index)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private renderCategory(category: typeof skillCategories[0], index: number): string {
    return `
      <div class="terminal-brutalist scroll-reveal-up animation-delay-${(index % 4) * 100}">
        <h3 class="font-mono font-bold text-sm mb-4 text-brutalist-green">
          > ${category.category}
        </h3>

        <ul class="space-y-2">
          ${category.skills
            .map(
              (skill) => `
            <li class="font-mono text-xs">• ${skill.name}</li>
          `
            )
            .join('')}
        </ul>
      </div>
    `;
  }
}
