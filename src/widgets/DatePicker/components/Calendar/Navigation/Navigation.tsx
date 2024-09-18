import { FC, useMemo } from 'react';
import { useDatePickerContext } from '../../../state';

import s from './Navigation.module.scss';

type NavigationProps = {
  className?: string;
};

const Navigation: FC<NavigationProps> = () => {
  const { location, navigationDate, handlerSetNextYear, handlerSetPrevYear, handlerSetNextMonth, handlerSetPrevMonth } =
    useDatePickerContext();

  const displayDateText = useMemo(() => {
    const formatter = new Intl.DateTimeFormat(location as Intl.LocalesArgument, { month: 'long', year: 'numeric' });

    return formatter.format(navigationDate);
  }, [location, navigationDate]);

  return (
    <div className={s.root}>
      <button className={s.root__button} onClick={handlerSetPrevYear}>
        {'<<'}
      </button>
      <button className={s.root__button} onClick={handlerSetPrevMonth}>
        {'<'}
      </button>
      <div className={s.root__display}>{displayDateText}</div>
      <button className={s.root__button} onClick={handlerSetNextMonth}>
        {'>'}
      </button>
      <button className={s.root__button} onClick={handlerSetNextYear}>
        {'>>'}
      </button>
    </div>
  );
};

export default Navigation;
