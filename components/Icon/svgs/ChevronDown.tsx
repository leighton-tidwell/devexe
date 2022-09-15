import { IconProps } from '../iconTypes';

export const ChevronDownSVG = ({ color = 'white' }: IconProps) => (
  <svg
    role="img"
    aria-label="chevron down"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Chevron Down</title>
    <path
      d="M6.5625 10.7812L15 19.2188L23.4375 10.7812"
      stroke={color}
      strokeWidth="2.50124"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
