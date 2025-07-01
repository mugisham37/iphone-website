import * as THREE from 'three';

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

// Video Carousel Types
export interface VideoState {
  isEnd: boolean;
  startPlay: boolean;
  videoId: number;
  isLastVideo: boolean;
  isPlaying: boolean;
}

export type VideoProcessType = 'video-end' | 'video-last' | 'video-reset' | 'pause' | 'play';

// 3D Model Types
export interface ModelViewProps {
  index: number;
  groupRef: React.RefObject<THREE.Group>;
  gsapType: string;
  // Using any for OrbitControls ref due to complex @react-three/drei typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  controlRef: React.RefObject<any>;
  setRotationState: (angle: number) => void;
  size: 'small' | 'large';
  item: ModelColor;
}

export interface IPhoneProps {
  scale: [number, number, number];
  item: ModelColor;
  size: 'small' | 'large';
}
