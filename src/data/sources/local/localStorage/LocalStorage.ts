import { useLocalStorage } from 'hooks/useLocalStorage';

/**
 * LocalStore
 */
export const LocalStore = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', false);

  return {
    isLoggedIn,
    setIsLoggedIn,
  };
};
