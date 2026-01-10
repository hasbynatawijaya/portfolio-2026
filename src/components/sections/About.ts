import { Component } from '@/core/Component';

export class About extends Component {
  render(): string {
    return `
      <section id="about" class="section">
        <div class="container">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left: Text Content -->
            <div class="scroll-reveal-up">
              <div class="font-mono text-sm text-brutalist-accent mb-2">[001]</div>
              <h2 class="heading-brutalist-lg mb-6">About Me</h2>

              <div class="space-y-4 text-lg">
                <p>
                  I'm a <strong>Senior Frontend Engineer</strong> with 7+ years of experience building
                  scalable, high-performance web applications for fintech and travel tech industries.
                </p>

                <p>
                  Currently at <strong class="text-brutalist-accent">CSG International</strong>, I'm working on
                  the micro-frontend migration of a legacy enterprise platform, leading a frontend team to architect modern solutions
                  that serve thousands of telecom billing users across the APAC region.
                </p>

                <p>
                  I specialize in <strong>React ecosystem, TypeScript, micro-frontend architecture,
                  and performance optimization</strong>. My work has contributed to <strong>30% revenue growth</strong>
                  and achieved <strong>30% performance improvements</strong> in production applications.
                </p>

                <p>
                  Beyond code, I'm passionate about <strong>technical mentoring</strong>, establishing
                  development standards, and collaborating with cross-functional teams to deliver
                  user-centric solutions.
                </p>
              </div>
            </div>

            <!-- Right: Key Highlights -->
            <div class="scroll-reveal-up animation-delay-200">
              <div class="card-brutalist p-8">
                <h3 class="font-display text-xl font-bold mb-6">What I Do Best</h3>

                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <span class="text-brutalist-accent font-mono text-sm mt-1">[•]</span>
                    <div>
                      <strong class="font-display">Micro-Frontend Architecture</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Building scalable, modular applications with clear boundaries
                      </p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-brutalist-accent font-mono text-sm mt-1">[•]</span>
                    <div>
                      <strong class="font-display">Performance Optimization</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Achieving measurable improvements through intelligent caching & optimization
                      </p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-brutalist-accent font-mono text-sm mt-1">[•]</span>
                    <div>
                      <strong class="font-display">Technical Leadership</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Mentoring engineers, driving architectural decisions, code review excellence
                      </p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-brutalist-accent font-mono text-sm mt-1">[•]</span>
                    <div>
                      <strong class="font-display">0-to-1 Product Development</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Built MVPs from scratch that scaled to millions in revenue
                      </p>
                    </div>
                  </li>
                </ul>

                <div class="mt-8 pt-6 border-t-brutalist border-brutalist-black dark:border-brutalist-white">
                  <p class="font-mono text-sm">
                    <span class="text-brutalist-gray">Currently @</span>
                    <strong class="text-brutalist-accent">CSG International</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
