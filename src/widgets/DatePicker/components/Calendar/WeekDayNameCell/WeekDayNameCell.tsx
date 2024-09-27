import { FC, memo } from 'react';

import s from './WeekDayNameCell.module.scss';

type WeekDayNameCellProps = {
  className?: string;
  name: string;
};

const WeekDayNameCell: FC<WeekDayNameCellProps> = ({ name }) => {
  return <span className={s.root}>{name}</span>;
};

export default memo(WeekDayNameCell);
