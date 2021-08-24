import { useEffect } from 'react';
import { useHistory } from 'react-router';

// store
import { LocalStore } from 'store/LocalStore';

/**
 * LoginViewModel
 */
export const LoginViewModel = () => {
  const { isLoggedIn, setIsLoggedIn } = LocalStore();

  const history = useHistory();

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/app');
    }
  }, [history, isLoggedIn]);

  const handleOnLoginClick = () => {
    setIsLoggedIn(true);
  };

  return {
    handleOnLoginClick,
  };
};
