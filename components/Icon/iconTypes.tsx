export type IconTypes = {
  icon?: 'discord';
};

export type IconProps = {
  color?: string;
};

export interface IconContainerProps extends IconProps, IconTypes {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
