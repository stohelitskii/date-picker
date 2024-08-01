import { FC } from 'react';

type WeekNumberCellProps = {
  className?: string;
  value: number;
};

const WeekNumberCell: FC<WeekNumberCellProps> = ({ className, value }) => {
  return <span className={className}>{value}</span>;
};

export default WeekNumberCell;
