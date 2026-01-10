import { Component } from '@/core/Component';
import { experiences } from '@/data/experience';

export class Experience extends Component {
  render(): string {
    return `
      <section id="experience" class="section bg-brutalist-white dark:bg-brutalist-black">
        <div class="container">
          <div class="scroll-reveal-up">
            <div class="font-mono text-sm text-brutalist-accent mb-2">[002]</div>
            <h2 class="heading-brutalist-lg mb-12">Experience</h2>
          </div>

          <div class="space-y-8">
            ${experiences.map((exp, index) => this.renderExperience(exp, index)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private renderExperience(exp: typeof experiences[0], index: number): string {
    return `
      <div class="card-brutalist-hover p-6 scroll-reveal-up animation-delay-${(index % 4) * 100}">
        <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
          <div>
            <h3 class="font-display text-2xl font-bold mb-2">${exp.position}</h3>
            <div class="flex items-center gap-3 mb-2">
              ${
                exp.companyUrl
                  ? `<a href="${exp.companyUrl}" target="_blank" rel="noopener noreferrer" class="text-lg font-bold link-brutalist-accent">${exp.company}</a>`
                  : `<span class="text-lg font-bold text-brutalist-accent">${exp.company}</span>`
              }
              <span class="text-brutalist-gray">•</span>
              <span class="text-sm text-brutalist-gray">${exp.location}</span>
            </div>
          </div>

          <div class="flex-shrink-0">
            <div class="font-mono text-sm px-3 py-1 border-2 border-brutalist-black dark:border-brutalist-white ${
              exp.current ? 'bg-brutalist-accent text-brutalist-white border-brutalist-accent' : ''
            }">
              ${exp.startDate} - ${exp.endDate}
            </div>
          </div>
        </div>

        <ul class="space-y-3 mb-4">
          ${exp.achievements
            .map(
              (achievement) => `
            <li class="flex items-start gap-3 text-sm">
              <span class="text-brutalist-accent font-mono mt-1 flex-shrink-0">▸</span>
              <span>${achievement}</span>
            </li>
          `
            )
            .join('')}
        </ul>

        <div class="flex flex-wrap gap-2">
          ${exp.tags
            .map(
              (tag) => `
            <span class="tag-brutalist">${tag}</span>
          `
            )
            .join('')}
        </div>
      </div>
    `;
  }
}
