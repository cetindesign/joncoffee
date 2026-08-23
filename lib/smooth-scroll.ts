/**
 * Precise, physics-based smooth scroll that dynamically aligns the section's
 * heading block directly below the sticky header with exact mathematical breathing room.
 */
export function smoothScrollTo(targetId: string, customOffset?: number, duration = 700) {
  if (typeof window === 'undefined') return;

  if (targetId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  // 1. Measure sticky header dynamically (includes marquee + nav height)
  const header = document.querySelector('header');
  const headerHeight = header ? header.getBoundingClientRect().height : 100;

  // 2. Locate the visual heading block (eyebrow + h2 container) inside the section
  const h2Element = target.querySelector('h2');
  const headingBlock = h2Element?.parentElement || target;

  // 3. Compute precise landing position: heading block sits exactly 20px below sticky header
  const visualGap = 20;
  const computedOffset = customOffset !== undefined ? customOffset : (headerHeight + visualGap);
  const elementTop = headingBlock.getBoundingClientRect().top + window.scrollY;
  const targetPosition = Math.max(0, elementTop - computedOffset);

  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;

  // If already at or very close to target, don't trigger animation
  if (Math.abs(distance) < 4) return;

  let startTime: number | null = null;

  // Cubic Ease In-Out: Smooth acceleration and soft deceleration landing
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}
