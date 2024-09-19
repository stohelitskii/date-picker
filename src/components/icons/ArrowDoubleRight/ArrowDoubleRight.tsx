import { FC } from 'react';
import { BaseIcon, BaseIconProps } from '../BaseIcon';

export const ArrowDoubleRight: FC<BaseIconProps> = (props) => {
  return (
    <BaseIcon viewBox='0 0 24 24' height='24' width='24' {...props}>
      <path fill='none' d='M0 0h24v24H0z'></path>
      <path fill='currentColor' d='M6.41 6 5 7.41 9.58 12 5 16.59 6.41 18l6-6z' />
      <path fill='currentColor' d='m13 6-1.41 1.41L16.17 12l-4.58 4.59L13 18l6-6z' />
    </BaseIcon>
  );
};
