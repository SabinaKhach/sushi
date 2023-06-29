import React, { useRef, useEffect } from 'react';

const OutsideClickHandler = ({ onOutsideClick, children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [onOutsideClick]);

  return <div ref={containerRef}>{children}</div>;
};

export default OutsideClickHandler;