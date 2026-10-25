import { Component } from '@/core/Component';

export class Footer extends Component {
  render(): string {
    const currentYear = new Date().getFullYear();

    return `
      <footer class="footer border-t-brutalist border-brutalist-black dark:border-brutalist-white bg-brutalist-white dark:bg-brutalist-black">
        <div class="container py-12">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Column 1: Branding -->
            <div>
              <h3 class="heading-brutalist-sm mb-4">HASBY NATAWIJAYA</h3>
              <p class="text-sm text-brutalist-gray mb-4">
                Senior Frontend Engineer with 9 years of experience building B2B web products.
              </p>
              <p class="font-mono text-xs text-brutalist-gray">
                Jakarta, Indonesia
              </p>
            </div>

            <!-- Column 2: Links -->
            <div>
              <h4 class="font-display font-bold text-sm uppercase mb-4">Quick Links</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="/#about" data-link class="link-brutalist">About</a></li>
                <li><a href="/#experience" data-link class="link-brutalist">Experience</a></li>
                <li><a href="/#projects" data-link class="link-brutalist">Projects</a></li>
                <li><a href="/#contact" data-link class="link-brutalist">Contact</a></li>
              </ul>
            </div>

            <!-- Column 3: Contact -->
            <div>
              <h4 class="font-display font-bold text-sm uppercase mb-4">Connect</h4>
              <ul class="space-y-2 text-sm">
                <li>
                  <a href="mailto:mhasbyn@gmail.com" class="link-brutalist" target="_blank" rel="noopener noreferrer">
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/hasby-natawijaya-513b9312a" class="link-brutalist" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/hasbynatawijaya" class="link-brutalist" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <!-- Bottom Bar -->
          <div class="border-t-brutalist border-brutalist-black dark:border-brutalist-white mt-12 pt-8">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
              <p class="font-mono text-xs text-brutalist-gray">
                &copy; ${currentYear} Hasby Natawijaya. Built with vanilla TypeScript.
              </p>
              <p class="font-mono text-xs text-brutalist-gray">
                No frameworks. Just pure code.
              </p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}
