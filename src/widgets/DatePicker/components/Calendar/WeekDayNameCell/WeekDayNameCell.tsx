import { FC, memo } from 'react';

type WeekDayNameCellProps = {
  className?: string;
  name: string;
};

const WeekDayNameCell: FC<WeekDayNameCellProps> = ({ name }) => {
  return <span>{name}</span>;
};

export default memo(WeekDayNameCell);
