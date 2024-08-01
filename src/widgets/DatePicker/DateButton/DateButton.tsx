import cn from 'classnames';
import { FC } from 'react';
import { DateMask } from '../types';
import { useDatePickerContext } from '../state/context';

import s from './DateButton.module.scss';

type DateButtonProps = {
  className?: string;
  dateMask: DateMask;
};

const DateButton: FC<DateButtonProps> = ({ className, dateMask }) => {
  const { handleToggleOpen } = useDatePickerContext();

  return (
    <button className={cn(className, s.root)} onClick={handleToggleOpen}>
      {dateMask}
    </button>
  );
};

export default DateButton;
