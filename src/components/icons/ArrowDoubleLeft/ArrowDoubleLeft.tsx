import { FC } from 'react';
import { BaseIcon, BaseIconProps } from '../BaseIcon';

export const ArrowDoubleLeft: FC<BaseIconProps> = (props) => {
  return (
    <BaseIcon viewBox='0 0 24 24' height='24' width='24' {...props}>
      <path fill='none' d='M0 0h24v24H0z' />
      <path fill='currentColor' d='M17.59 18 19 16.59 14.42 12 19 7.41 17.59 6l-6 6z' />
      <path fill='currentColor' d='m11 18 1.41-1.41L7.83 12l4.58-4.59L11 6l-6 6z' />
    </BaseIcon>
  );
};
