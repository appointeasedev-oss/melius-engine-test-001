import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <animated.div style={props}>
      {/* Scroll-to-top component content */}
    </animated.div>
  );
};

export default ScrollToTop;
# Auto improvement by Melius