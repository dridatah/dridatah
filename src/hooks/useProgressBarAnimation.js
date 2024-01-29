import { useState, useEffect, useRef } from 'react';

/**
 * Custom Hook: useProgressBarAnimation
 * A custom hook to animate progress bars when they come into view.
 *
 * @returns {Object} - An object containing the ref and animate state.
 * @property {React.RefObject} ref - The ref to be attached to the element that triggers the animation.
 * @property {boolean} animate - A boolean state that indicates whether the element is in view (true) or not (false) to trigger the animation.
 */
const useProgressBarAnimation = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref, animate };
};

export default useProgressBarAnimation;
