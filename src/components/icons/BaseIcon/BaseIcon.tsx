import cn from 'classnames';
import { FC, SVGAttributes } from 'react';

import s from './BaseIcon.module.scss';

export type BaseIconProps = {
  size?: number;
  className?: string;
} & SVGAttributes<SVGElement>;

export const BaseIcon: FC<BaseIconProps> = ({ className, children, size, width, height, ...props }) => {
  return (
    <svg
      fill='none'
      className={cn(className, s.root)}
      width={size ?? width}
      height={size ?? height}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      {children}
    </svg>
  );
};
