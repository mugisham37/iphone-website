import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from '@/lib/utils';
import type { NavItem, HighlightSlide, ModelColor, ModelSize, FooterLink } from '@/types';

// Navigation Configuration
export const navLists: NavItem[] = ['Store', 'Mac', 'iPhone', 'Support'];

// Highlights Carousel Configuration
export const hightlightsSlides: HighlightSlide[] = [
  {
    id: 1,
    textLists: [
      'Enter A17 Pro.',
      'Game‑changing chip.',
      'Groundbreaking performance.',
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ['Titanium.', 'So strong. So light. So Pro.'],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      'iPhone 15 Pro Max has the',
      'longest optical zoom in',
      'iPhone ever. Far out.',
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ['All-new Action button.', 'What will yours do?.'],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

// iPhone Models Configuration
export const models: ModelColor[] = [
  {
    id: 1,
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
    img: yellowImg,
  },
  {
    id: 2,
    title: 'iPhone 15 Pro in Blue Titanium',
    color: ['#53596E', '#6395ff', '#21242e'],
    img: blueImg,
  },
  {
    id: 3,
    title: 'iPhone 15 Pro in White Titanium',
    color: ['#C9C8C2', '#ffffff', '#C9C8C2'],
    img: whiteImg,
  },
  {
    id: 4,
    title: 'iPhone 15 Pro in Black Titanium',
    color: ['#454749', '#3b3b3b', '#181819'],
    img: blackImg,
  },
];

// iPhone Sizes Configuration
export const sizes: ModelSize[] = [
  { label: '6.1"', value: 'small' },
  { label: '6.7"', value: 'large' },
];

// Footer Links Configuration
export const footerLinks: FooterLink[] = [
  'Privacy Policy',
  'Terms of Use',
  'Sales Policy',
  'Legal',
  'Site Map',
];

// Animation Configuration Constants
export const ANIMATION_DEFAULTS = {
  duration: 1,
  ease: 'power2.inOut',
  stagger: 0.1,
} as const;

// Responsive Breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const;

// Video Configuration
export const VIDEO_CONFIG = {
  autoplay: true,
  muted: true,
  loop: true,
  playsInline: true,
  preload: 'metadata' as const,
} as const;

// Color Palette
export const COLORS = {
  primary: '#2997FF',
  gray: {
    DEFAULT: '#86868b',
    100: '#94928d',
    200: '#afafaf',
    300: '#42424570',
  },
  zinc: '#101010',
  black: '#000000',
  white: '#ffffff',
} as const;

// Z-Index Scale
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
} as const;
