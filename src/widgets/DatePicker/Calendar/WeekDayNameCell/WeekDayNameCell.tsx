import { FC } from 'react';
import { WeekDayNameData } from '../../types';

type WeekDayNameCellProps = WeekDayNameData;

const WeekDayNameCell: FC<WeekDayNameCellProps> = ({ value, text }) => {
  return <span>{text}</span>;
};

export default WeekDayNameCell;
