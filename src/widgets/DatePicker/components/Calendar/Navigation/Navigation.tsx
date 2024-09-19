import { FC, useMemo } from 'react';
import { useDatePickerContext } from '../../../state';

import { ArrowLeft, ArrowDoubleLeft, ArrowRight, ArrowDoubleRight } from '@/components/icons';

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
        <ArrowDoubleLeft className={s.root__icon} />
      </button>
      <button className={s.root__button} onClick={handlerSetPrevMonth}>
        <ArrowLeft className={s.root__icon} />
      </button>
      <div className={s.root__display}>{displayDateText}</div>
      <button className={s.root__button} onClick={handlerSetNextMonth}>
        <ArrowRight className={s.root__icon} />
      </button>
      <button className={s.root__button} onClick={handlerSetNextYear}>
        <ArrowDoubleRight className={s.root__icon} />
      </button>
    </div>
  );
};

export default Navigation;
