import React, { useEffect, useState } from 'react';

function Fade({ visible, children }) {
  const [showChildren, setShowChildren] = useState(visible);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setShowChildren(true);
      }, 150); 
      return () => {
        clearTimeout(timer);
      };
    } else {
      const timer = setTimeout(() => {
        setShowChildren(false);
      }, 150);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [visible]);

  let className = 'fade';
  if (!visible) {
    className += ' out';
  }

  return <div className={className}>{showChildren && children}</div>;
}

export default Fade;
