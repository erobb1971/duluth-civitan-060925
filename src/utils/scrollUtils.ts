import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollToPlugin);

interface ScrollOptions {
  offset?: number;
  duration?: number;
  ease?: string;
}

const DEFAULT_OFFSET = 0;
const DEFAULT_DURATION = 1;
const DEFAULT_EASE = 'power2.inOut';

export const scrollUtils = {
  /**
   * Scroll to a specific element with smooth animation
   */
  scrollToElement: (elementId: string, options: ScrollOptions = {}) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const {
      offset = DEFAULT_OFFSET,
      duration = DEFAULT_DURATION,
      ease = DEFAULT_EASE,
    } = options;

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    gsap.to(window, {
      duration,
      scrollTo: {
        y: offsetPosition,
        autoKill: false,
      },
      ease,
    });
  },

  /**
   * Scroll to top of the page
   */
  scrollToTop: (options: ScrollOptions = {}) => {
    const {
      duration = DEFAULT_DURATION,
      ease = DEFAULT_EASE,
    } = options;

    gsap.to(window, {
      duration,
      scrollTo: {
        y: 0,
        autoKill: false,
      },
      ease,
    });
  },

  /**
   * Get the current scroll position
   */
  getScrollPosition: () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  },

  /**
   * Check if an element is in viewport
   */
  isElementInViewport: (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },
}; 