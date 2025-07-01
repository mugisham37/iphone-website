// Animation Types
export interface AnimationProps {
  duration?: number;
  delay?: number;
  ease?: string;
  x?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  rotation?: number;
  [key: string]: string | number | boolean | undefined;
}

export interface ScrollProps {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  toggleActions?: string;
  [key: string]: string | number | boolean | Element | undefined;
}

// Model Types
export interface ModelColor {
  id: number;
  title: string;
  color: [string, string, string];
  img: string;
}

export interface ModelSize {
  label: string;
  value: 'small' | 'large';
}

// Highlight Slide Types
export interface HighlightSlide {
  id: number;
  textLists: string[];
  video: string;
  videoDuration: number;
}

// Navigation Types
export type NavItem = string;

// Footer Types
export type FooterLink = string;

// GSAP Timeline Reference Type
export interface TimelineRef {
  current: {
    rotation: {
      y: number;
    };
  };
}
