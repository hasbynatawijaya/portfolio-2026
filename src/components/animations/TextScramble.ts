export class TextScramble {
  private element: HTMLElement;
  private chars = '!<>-_\\/[]{}—=+*^?#________';
  private frameRequest: number | null = null;
  private frame = 0;
  private queue: Array<{ from: string; to: string; start: number; end: number; char?: string }> =
    [];
  private resolve: (() => void) | null = null;

  constructor(element: HTMLElement) {
    this.element = element;
  }

  async animate(newText: string): Promise<void> {
    const oldText = this.element.textContent || '';
    const length = Math.max(oldText.length, newText.length);

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
    }

    this.frame = 0;

    return new Promise((resolve) => {
      this.resolve = resolve;
      this.update();
    });
  }

  private update = (): void => {
    let output = '';
    let complete = 0;

    for (let i = 0; i < this.queue.length; i++) {
      const { from, to, start, end, char } = this.queue[i]!;

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          this.queue[i]!.char = this.randomChar();
        }
        output += `<span class="text-brutalist-accent">${this.queue[i]!.char}</span>`;
      } else {
        output += from;
      }
    }

    this.element.innerHTML = output;

    if (complete === this.queue.length) {
      if (this.resolve) {
        this.resolve();
        this.resolve = null;
      }
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  };

  private randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)] || '';
  }

  stop(): void {
    if (this.frameRequest) {
      cancelAnimationFrame(this.frameRequest);
      this.frameRequest = null;
    }
    if (this.resolve) {
      this.resolve();
      this.resolve = null;
    }
  }
}
