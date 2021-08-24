import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { LocalStore } from 'store/LocalStore';

/**
 * FirstAppPageViewModel
 */
export const FirstAppPageViewModel = () => {
  const history = useHistory();

  const { isLoggedIn, setIsLoggedIn } = LocalStore();

  const title: string = 'Home page';
  const description: string = 'This is home description';

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/');
    }
  }, [history, isLoggedIn]);

  const handleOnLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return {
    title,
    description,
    handleOnLogoutClick,
  };
};
