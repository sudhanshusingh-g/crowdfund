import { useEffect,useState, useRef } from "react";

function useOutsideClickAndTimeout(initialState, timeoutDuration) {
  const [isVisible, setIsVisible] = useState(initialState);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible) {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsVisible(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, timeoutDuration);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        clearTimeout(timer);
      };
    }
  }, [isVisible, timeoutDuration]);

  return { ref, isVisible, setIsVisible };
}

export default useOutsideClickAndTimeout;
