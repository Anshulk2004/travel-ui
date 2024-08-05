declare module 'vanta/dist/vanta.birds.min' {
    import * as THREE from 'three';
  
    export const BIRDS: (opts: {
      el: HTMLElement;
      THREE: typeof THREE;
      mouseControls?: boolean;
      touchControls?: boolean;
      gyroControls?: boolean;
      minHeight?: number;
      minWidth?: number;
      scale?: number;
      scaleMobile?: number;
      backgroundColor?: number;
      color1?: number;
      color2?: number;
      colorMode?: string;
      birdSize?: number;
      wingSpan?: number;
      speedLimit?: number;
      separation?: number;
      alignment?: number;
      cohesion?: number;
      quantity?: number;
    }) => {
      destroy: () => void;
    };
  }