import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollHandler = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Scroll to top on route change (unless there is a hash)
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // Scroll to hash element
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [pathname, hash]);

  return null;
};
