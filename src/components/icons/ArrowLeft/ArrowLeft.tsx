import { FC } from 'react';
import { BaseIcon, BaseIconProps } from '../BaseIcon';

export const ArrowLeft: FC<BaseIconProps> = (props) => {
  return (
    <BaseIcon viewBox='0 0 24 24' height='24' width='24' {...props}>
      <path fill='none' d='M0 0h24v24H0V0z' />
      <path fill='currentColor' d='M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z' />
    </BaseIcon>
  );
};
