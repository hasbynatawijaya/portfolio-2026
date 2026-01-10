import { App } from './core/App';
import './styles/main.css';

async function main() {
  try {
    const app = new App();
    await app.init();

    if (import.meta.env.DEV) {
      (window as any).__APP__ = app;
    }
  } catch (error) {
    console.error('Failed to initialize application:', error);

    document.body.innerHTML = `
      <div style="
        display: flex;
        align-items: center;
        justify-center: center;
        min-height: 100vh;
        padding: 2rem;
        font-family: monospace;
      ">
        <div style="
          border: 3px solid #FF0000;
          padding: 2rem;
          max-width: 600px;
        ">
          <h1 style="margin: 0 0 1rem 0; font-size: 2rem;">
            [ERROR]
          </h1>
          <p style="margin: 0 0 1rem 0;">
            Failed to initialize application. Please check the console for details.
          </p>
          <pre style="
            background: #000;
            color: #0F0;
            padding: 1rem;
            overflow-x: auto;
          ">${error instanceof Error ? error.message : String(error)}</pre>
        </div>
      </div>
    `;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  void main();
}
