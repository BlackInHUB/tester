import { useEffect, useState } from 'react';
import { LoaderMessage, Spinner } from './Loader.styled';
import { useApp } from '../../appContext';

export const Loader = ({ $size }) => {
  const { isLoading, language } = useApp();
  const [serverIsWaking, setServerIsWaking] = useState(false);

  useEffect(() => {
    let timer;

    if (isLoading) {
      timer = setTimeout(() => {
        setServerIsWaking(true);
      }, 3000);
    } else {
      setServerIsWaking(false);
      clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (!isLoading) return null;

  return serverIsWaking ? (
    <LoaderMessage>
      <span>
        {language === 'EN'
          ? 'One minute please, server wakes up..'
          : 'Будимо сервер, хвилинку бульласка..'}
      </span>
    </LoaderMessage>
  ) : (
    <Spinner $size={$size} />
  );
};
