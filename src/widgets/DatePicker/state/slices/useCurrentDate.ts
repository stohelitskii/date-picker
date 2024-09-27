import { useState } from 'react';

export type UseCurrentDate = {
  currentDate: Date;
};

export const useCurrentDate = (): UseCurrentDate => {
  const [currentDate] = useState<Date>(() => {
    return new Date();
  });

  return {
    currentDate,
  };
};
