import cn from 'classnames';
import { FC, useMemo } from 'react';

import { useDatePickerContext } from '../../state/context';

import s from './DateCell.module.scss';

type DateCellProps = {
  className?: string;
  timestamp: number;
  value: number;
};

const DateCell: FC<DateCellProps> = ({ className, timestamp, value }) => {
  const { navigationDate } = useDatePickerContext();

  const isCurrentMonth = useMemo(() => {
    return new Date(timestamp).getMonth() === new Date(navigationDate.timestamp).getMonth();
  }, [timestamp, navigationDate]);

  return <button className={cn(className, s.root, isCurrentMonth && s['root_current-month'])}>{value}</button>;
};

export default DateCell;
