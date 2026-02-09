```typescript
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  title: string;
  subtitle: string;
  buttonText: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, buttonText }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (heroRef.current && imageRef.current && buttonRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: buttonRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={heroRef}
      className="hero"
      style={{
        '--hero-bg': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        '--hero-text': 'white',
        '--hero-button': 'white',
        '--hero-button-bg': 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <button
          ref={buttonRef}
          className="hero-button"
          aria-label="Learn more"
        >
          {buttonText}
        </button>
      </div>
      <img
        ref={imageRef}
        src="/hero-image.jpg"
        alt="Hero image"
        loading="lazy"
        decoding="async"
      />
    </div>
  );
};

export default Hero;
```