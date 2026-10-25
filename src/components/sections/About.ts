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
                  I'm a <strong>Senior Frontend Engineer</strong> with 9 years of experience building
                  B2B web products across fintech, travel tech and telecom.
                </p>

                <p>
                  Currently at <strong class="text-brutalist-accent">CSG International</strong>, I work on the
                  Quote &amp; Order application of an enterprise telecom billing platform, shipping features across a new
                  Angular app and the legacy AngularJS system it runs inside as part of an incremental migration.
                </p>

                <p>
                  I specialize in the <strong>React ecosystem and TypeScript</strong>, and I'm happiest close to the
                  product. I was the first frontend engineer at TruTrip, built its booking product from scratch, and was
                  later rehired by my former manager to work on its travel policy engine.
                </p>

                <p>
                  Beyond code, I care about clear frontend conventions, thoughtful code review, and working
                  closely with product, design and backend to ship things people actually use.
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
                      <strong class="font-display">Product Engineering</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Turning messy business rules into software people use every week
                      </p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-brutalist-accent font-mono text-sm mt-1">[•]</span>
                    <div>
                      <strong class="font-display">Performance Optimization</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Smarter data fetching and caching, and large result sets that stay responsive
                      </p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-brutalist-accent font-mono text-sm mt-1">[•]</span>
                    <div>
                      <strong class="font-display">Legacy Modernization</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Migrating AngularJS to Angular incrementally while the product keeps shipping
                      </p>
                    </div>
                  </li>

                  <li class="flex items-start gap-3">
                    <span class="text-brutalist-accent font-mono text-sm mt-1">[•]</span>
                    <div>
                      <strong class="font-display">0-to-1 Product Development</strong>
                      <p class="text-sm text-brutalist-gray mt-1">
                        Built a corporate travel booking product from zero to paying customers
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
