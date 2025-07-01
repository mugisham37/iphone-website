'use client';

import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { heroVideo, smallHeroVideo } from '@/lib/utils';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState<string>(
    typeof window !== 'undefined' && window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    // Initial check for SSR safety
    if (typeof window !== 'undefined') {
      handleVideoSrcSet();
      window.addEventListener('resize', handleVideoSrcSet);

      return () => {
        window.removeEventListener('resize', handleVideoSrcSet);
      };
    }
  }, []);

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 });
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video 
            className="pointer-events-none" 
            autoPlay 
            muted 
            playsInline 
            key={videoSrc}
            aria-label="iPhone 15 Pro hero video"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a 
          href="#highlights" 
          className="btn"
          aria-label="Buy iPhone 15 Pro"
        >
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
