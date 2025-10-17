
import type { SVGProps } from 'react';

export const LipstickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4.8 11.3l1.8-1.8c.5-.5 1.3-.5 1.8 0l2.4 2.4c.5.5.5 1.3 0 1.8l-1.8 1.8" />
    <path d="M8.2 9.5l-2.6 2.6" />
    <path d="M12.5 5.1L15 2.6c.5-.5 1.3-.5 1.8 0l2.6 2.6c.5.5.5 1.3 0 1.8l-2.6 2.6" />
    <path d="m10.1 11.5 2.4-2.4" />
    <path d="M14 20.8V14l4.2-4.2" />
    <path d="M18 14V8.5c0-1.4-1.1-2.5-2.5-2.5H14" />
  </svg>
);
