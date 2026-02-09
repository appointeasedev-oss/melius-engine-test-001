```tsx
import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    // SSR safety check to prevent window access on server
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return null;
};

export default ScrollToTop;
```