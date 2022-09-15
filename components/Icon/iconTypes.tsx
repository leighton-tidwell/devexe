export type IconTypes = {
  icon?: 'chevron-down' | 'discord';
};

export type IconProps = {
  color?: string;
};

export interface IconContainerProps extends IconProps, IconTypes {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
