/**
 * Hardware-accelerated native smooth scroll that aligns section headings
 * cleanly below the sticky header without artificial JS loops or lag.
 */
export function smoothScrollTo(targetId: string, customOffset?: number) {
  if (typeof window === 'undefined') return;

  if (targetId === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.getElementById(targetId);
  if (!target) return;

  // 1. Measure sticky header dynamically (includes marquee + nav height)
  const header = document.querySelector('header');
  const headerHeight = header ? header.getBoundingClientRect().height : 90;

  // 2. Locate the visual heading block or target element
  const h2Element = target.querySelector('h2');
  const headingBlock = h2Element?.parentElement || target;

  // 3. Compute precise landing position
  const visualGap = 16;
  const computedOffset = customOffset !== undefined ? customOffset : (headerHeight + visualGap);
  const elementTop = headingBlock.getBoundingClientRect().top + window.scrollY;
  const targetPosition = Math.max(0, elementTop - computedOffset);

  // 4. Native OS compositor-driven smooth scroll (instant response, natural inertial deceleration)
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  });
}
