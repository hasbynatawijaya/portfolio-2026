import { Component } from '@/core/Component';

export class NotFoundPage extends Component {
  render(): string {
    return `
      <div class="not-found-page min-h-screen flex items-center justify-center bg-grid">
        <div class="container">
          <div class="max-w-2xl mx-auto text-center">
            <!-- 404 Display -->
            <div class="terminal-brutalist mb-8 inline-block">
              <pre class="font-mono text-sm">
  _____ _____  _____
 |  |  |  |  ||  |  |
 |__    |  |  |__    |
 |__|___|_____|__|___|

ERROR: PAGE NOT FOUND
              </pre>
            </div>

            <h1 class="heading-brutalist-lg mb-4">404</h1>
            <p class="text-2xl mb-8">
              The page you're looking for doesn't exist.
            </p>

            <!-- Suggestions -->
            <div class="card-brutalist p-6 text-left mb-8">
              <h2 class="font-display font-bold text-lg mb-4">You might want to:</h2>
              <ul class="space-y-3">
                <li>
                  <a href="/" data-link class="link-brutalist-accent">
                    → Go back to homepage
                  </a>
                </li>
                <li>
                  <a href="/#projects" data-link class="link-brutalist-accent">
                    → View my projects
                  </a>
                </li>
                <li>
                  <a href="/#contact" data-link class="link-brutalist-accent">
                    → Get in touch
                  </a>
                </li>
              </ul>
            </div>

            <!-- CTA -->
            <div class="flex flex-wrap justify-center gap-4">
              <a href="/" data-link class="btn-brutalist-primary">
                Take Me Home
              </a>
              <a href="/#contact" data-link class="btn-brutalist">
                Contact Me
              </a>
            </div>

            <!-- Easter Egg -->
            <div class="mt-12">
              <p class="font-mono text-xs text-brutalist-gray">
                Lost? Try the Konami code for a performance dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

export default NotFoundPage;
