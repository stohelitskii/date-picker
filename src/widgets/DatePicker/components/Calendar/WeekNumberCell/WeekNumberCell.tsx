import { FC, memo } from 'react';

type WeekNumberCellProps = {
  className?: string;
  value: number;
};

const WeekNumberCell: FC<WeekNumberCellProps> = ({ value }) => {
  return <span>{value}</span>;
};

export default memo(WeekNumberCell);
