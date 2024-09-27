import { FC } from 'react';
import { BaseIcon, BaseIconProps } from '../BaseIcon';

export const ArrowRight: FC<BaseIconProps> = (props) => {
  return (
    <BaseIcon viewBox='0 0 24 24' height='24' width='24' {...props}>
      <path fill='none' d='M0 0h24v24H0V0z' />
      <path fill='currentColor' d='M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
    </BaseIcon>
  );
};
