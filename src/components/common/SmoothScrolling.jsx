"use client";
import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScrolling({ children }) {
  const lenisOptions = {
    lerp: 0.05,           // Lower = smoother (0.05-0.1 recommended)
    duration: 1.2,        // Animation duration
    smoothTouch: true,    // Enable smooth scroll on mobile
    smooth: true,         
    wheelMultiplier: 1,   // Mouse wheel sensitivity
    touchMultiplier: 1,   // Touch sensitivity
    infinite: false,      // Disable infinite scroll
    autoResize: true,     // Auto resize on window resize
    syncTouch: false,     // Better for performance on mobile
  };

  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
