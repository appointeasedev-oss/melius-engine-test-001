```tsx
import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // SSR safety check to prevent window access on server
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // Added smooth scrolling behavior
      });
    }
  }, []);

  return null;
};

export default ScrollToTop;
```