'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { AnimationProps, ScrollProps, TimelineRef } from '@/types';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Enhanced GSAP animation utility with scroll trigger support
 * @param target - CSS selector string or DOM element
 * @param animationProps - GSAP animation properties
 * @param scrollProps - ScrollTrigger configuration
 */
export const animateWithGsap = (
  target: string | Element,
  animationProps: AnimationProps,
  scrollProps?: ScrollProps
): gsap.core.Tween => {
  return gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse',
      start: 'top 85%',
      ...scrollProps,
    },
  });
};

/**
 * Enhanced GSAP timeline animation for complex sequences
 * @param timeline - GSAP timeline instance
 * @param rotationRef - React ref for rotation object
 * @param rotationState - Target rotation value
 * @param firstTarget - First animation target
 * @param secondTarget - Second animation target
 * @param animationProps - Animation properties for targets
 */
export const animateWithGsapTimeline = (
  timeline: gsap.core.Timeline,
  rotationRef: TimelineRef,
  rotationState: number,
  firstTarget: string | Element,
  secondTarget: string | Element,
  animationProps: AnimationProps
): void => {
  // Animate rotation
  timeline.to(rotationRef.current.rotation, {
    y: rotationState,
    duration: 1,
    ease: 'power2.inOut',
  });

  // Animate first target
  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<' // Start at the same time as previous animation
  );

  // Animate second target
  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: 'power2.inOut',
    },
    '<' // Start at the same time as previous animation
  );
};

/**
 * React hook for GSAP animations with cleanup
 * @param callback - Animation callback function
 * @param dependencies - Dependencies array for useEffect
 */
export const useGsapAnimation = (
  callback: () => gsap.core.Tween | gsap.core.Timeline | void,
  dependencies: React.DependencyList = []
) => {
  const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Clean up previous animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Create new animation
    const animation = callback();
    if (animation) {
      animationRef.current = animation;
    }

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return animationRef;
};

/**
 * Utility function to create a GSAP timeline with default settings
 */
export const createTimeline = (config?: gsap.TimelineVars): gsap.core.Timeline => {
  return gsap.timeline({
    defaults: { ease: 'power2.inOut' },
    ...config,
  });
};

/**
 * Utility function for fade in animations
 */
export const fadeIn = (
  target: string | Element,
  duration: number = 1,
  delay: number = 0
): gsap.core.Tween => {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration, delay, ease: 'power2.out' }
  );
};

/**
 * Utility function for slide up animations
 */
export const slideUp = (
  target: string | Element,
  duration: number = 1,
  delay: number = 0
): gsap.core.Tween => {
  return gsap.fromTo(
    target,
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration, delay, ease: 'power2.out' }
  );
};
