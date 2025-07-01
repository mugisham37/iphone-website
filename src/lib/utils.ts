// Asset path constants for Next.js optimization
const ASSETS_BASE = '/assets';

// Hero Assets
export const heroImg = `${ASSETS_BASE}/images/hero.jpeg`;

// Video Assets
export const heroVideo = `${ASSETS_BASE}/videos/hero.mp4`;
export const smallHeroVideo = `${ASSETS_BASE}/videos/smallHero.mp4`;
export const highlightFirstVideo = `${ASSETS_BASE}/videos/highlight-first.mp4`;
export const highlightSecondVideo = `${ASSETS_BASE}/videos/hightlight-sec.mp4`;
export const highlightThirdVideo = `${ASSETS_BASE}/videos/hightlight-third.mp4`;
export const highlightFourthVideo = `${ASSETS_BASE}/videos/hightlight-fourth.mp4`;
export const exploreVideo = `${ASSETS_BASE}/videos/explore.mp4`;
export const frameVideo = `${ASSETS_BASE}/videos/frame.mp4`;

// Icon Assets
export const appleImg = `${ASSETS_BASE}/images/apple.svg`;
export const searchImg = `${ASSETS_BASE}/images/search.svg`;
export const bagImg = `${ASSETS_BASE}/images/bag.svg`;
export const watchImg = `${ASSETS_BASE}/images/watch.svg`;
export const rightImg = `${ASSETS_BASE}/images/right.svg`;
export const replayImg = `${ASSETS_BASE}/images/replay.svg`;
export const playImg = `${ASSETS_BASE}/images/play.svg`;
export const pauseImg = `${ASSETS_BASE}/images/pause.svg`;

// Product Images
export const yellowImg = `${ASSETS_BASE}/images/yellow.jpg`;
export const blueImg = `${ASSETS_BASE}/images/blue.jpg`;
export const whiteImg = `${ASSETS_BASE}/images/white.jpg`;
export const blackImg = `${ASSETS_BASE}/images/black.jpg`;
export const explore1Img = `${ASSETS_BASE}/images/explore1.jpg`;
export const explore2Img = `${ASSETS_BASE}/images/explore2.jpg`;
export const chipImg = `${ASSETS_BASE}/images/chip.jpeg`;
export const frameImg = `${ASSETS_BASE}/images/frame.png`;

// Utility function to get optimized asset path for Next.js
export const getAssetPath = (path: string): string => {
  return `${ASSETS_BASE}/${path}`;
};

// Utility function for responsive video sources
export const getVideoSources = (baseName: string) => ({
  desktop: getAssetPath(`videos/${baseName}.mp4`),
  mobile: getAssetPath(`videos/small${baseName.charAt(0).toUpperCase() + baseName.slice(1)}.mp4`),
});

// Utility function for image optimization with multiple formats
export const getImageSources = (baseName: string, formats: string[] = ['jpg', 'webp']) => {
  return formats.reduce((acc, format) => {
    acc[format] = getAssetPath(`images/${baseName}.${format}`);
    return acc;
  }, {} as Record<string, string>);
};

// Utility function to create srcSet for responsive images
export const createSrcSet = (baseName: string, sizes: number[] = [480, 768, 1024, 1280]) => {
  return sizes
    .map(size => `${getAssetPath(`images/${baseName}-${size}w.jpg`)} ${size}w`)
    .join(', ');
};

// Utility function for video preloading
export const preloadVideo = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.onloadeddata = () => resolve();
    video.onerror = reject;
    video.src = src;
    video.load();
  });
};
