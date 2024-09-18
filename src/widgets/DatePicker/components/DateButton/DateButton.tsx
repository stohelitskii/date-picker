import { FC } from 'react';

import { useDatePickerContext } from '../../state';

import s from './DateButton.module.scss';

const DateButton: FC = () => {
  const { dateFormat, selectedDateTextValue, handleToggleOpen } = useDatePickerContext();

  return (
    <button className={s.root} onClick={handleToggleOpen}>
      {selectedDateTextValue || dateFormat}
    </button>
  );
};

export default DateButton;
