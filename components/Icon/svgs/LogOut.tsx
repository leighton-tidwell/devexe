import { IconProps } from '../iconTypes';

export const LogOutSVG = ({ color = 'white' }: IconProps) => (
  <svg
    role="img"
    viewBox="0 0 29 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Log out</title>
    <path
      d="M17.2188 19.0312V21.2969C17.2188 21.8978 16.9801 22.474 16.5552 22.8989C16.1303 23.3238 15.554 23.5625 14.9531 23.5625H5.89062C5.28974 23.5625 4.71347 23.3238 4.28859 22.8989C3.8637 22.474 3.625 21.8978 3.625 21.2969V7.70312C3.625 7.10224 3.8637 6.52597 4.28859 6.10109C4.71347 5.6762 5.28974 5.4375 5.89062 5.4375H14.5C15.7512 5.4375 17.2188 6.45193 17.2188 7.70312V9.96875M20.8438 19.0312L25.375 14.5L20.8438 9.96875M9.96875 14.5H24.4688"
      stroke={color}
      strokeWidth="2.07654"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
