export type IconTypes = {
  icon?: 'chevron-down' | 'discord' | 'log-out';
};

export type IconProps = {
  color?: string;
};

export interface IconContainerProps extends IconProps, IconTypes {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fontSizeHeights?: boolean;
}
