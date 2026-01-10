export class MagneticButton {
  private element: HTMLElement;
  private strength: number;
  private boundingRect: DOMRect | null = null;
  private isHovered = false;
  private currentX = 0;
  private currentY = 0;
  private targetX = 0;
  private targetY = 0;
  private animationFrame: number | null = null;

  constructor(element: HTMLElement, strength = 0.3) {
    this.element = element;
    this.strength = strength;

    this.init();
  }

  private init(): void {
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mousemove', this.handleMouseMove);
    this.element.addEventListener('mouseleave', this.handleMouseLeave);

    window.addEventListener('resize', this.updateBoundingRect);
    this.updateBoundingRect();
  }

  private updateBoundingRect = (): void => {
    this.boundingRect = this.element.getBoundingClientRect();
  };

  private handleMouseEnter = (): void => {
    this.isHovered = true;
    this.updateBoundingRect();
    this.element.style.transition = 'none';
  };

  private handleMouseMove = (e: MouseEvent): void => {
    if (!this.boundingRect) return;

    const x = e.clientX - this.boundingRect.left;
    const y = e.clientY - this.boundingRect.top;
    const centerX = this.boundingRect.width / 2;
    const centerY = this.boundingRect.height / 2;

    const deltaX = (x - centerX) * this.strength;
    const deltaY = (y - centerY) * this.strength;

    this.targetX = deltaX;
    this.targetY = deltaY;

    if (!this.animationFrame) {
      this.animate();
    }
  };

  private handleMouseLeave = (): void => {
    this.isHovered = false;
    this.targetX = 0;
    this.targetY = 0;

    this.element.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
    this.element.style.transform = 'translate(0, 0)';

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }

    this.currentX = 0;
    this.currentY = 0;
  };

  private animate = (): void => {
    const ease = 0.1;
    this.currentX += (this.targetX - this.currentX) * ease;
    this.currentY += (this.targetY - this.currentY) * ease;

    this.element.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;

    const distance = Math.sqrt(
      Math.pow(this.targetX - this.currentX, 2) + Math.pow(this.targetY - this.currentY, 2)
    );

    if (this.isHovered || distance > 0.5) {
      this.animationFrame = requestAnimationFrame(this.animate);
    } else {
      this.animationFrame = null;
    }
  };

  setStrength(strength: number): void {
    this.strength = strength;
  }

  destroy(): void {
    this.element.removeEventListener('mouseenter', this.handleMouseEnter);
    this.element.removeEventListener('mousemove', this.handleMouseMove);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);
    window.removeEventListener('resize', this.updateBoundingRect);

    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
