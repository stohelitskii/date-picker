import { RefObject, useCallback, useEffect, useState } from 'react';

type UseDatePickerStateProps = {
  ref: RefObject<HTMLDivElement> | null;
};

export type UseDatePickerState = {
  isOpen: boolean;
  handleToggleOpen: () => void;
};

const useDatePickerState = ({ ref }: UseDatePickerStateProps): UseDatePickerState => {
  const [isOpen, setOpen] = useState(true);

  useEffect(() => {
    if (!ref) {
      return;
    }
    const handleClickOutside = (e: Event) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [ref]);

  const handleToggleOpen = useCallback(() => {
    setOpen((prevState) => !prevState);
  }, []);

  return {
    isOpen,
    handleToggleOpen,
  };
};

export default useDatePickerState;
