import React, { useRef, useEffect, useState } from 'react';

export interface WithFocusProps {
  focused: boolean; 
}

export function withFocus<P extends object>(
  WrappedComponent: React.ComponentType<P & WithFocusProps>
) {
  const WithFocusComponent = (props: P) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [focused, setFocused] = useState(false);

    useEffect(() => {
      const element = containerRef.current;
      if (!element) return;

      const handleFocus = () => {
        console.log('Focused'); // Вывод в консоль как на скрине
        setFocused(true);
      };

      const handleBlur = () => {
        console.log('Blurred'); // Вывод в консоль как на скрине
        setFocused(false);
      };

      // Слушаем события фокуса на контейнере
      element.addEventListener('focusin', handleFocus);
      element.addEventListener('focusout', handleBlur);

      return () => {
        element.removeEventListener('focusin', handleFocus);
        element.removeEventListener('focusout', handleBlur);
      };
    }, []);

    return (
      <div ref={containerRef}>
        <WrappedComponent {...(props as P)} focused={focused} />
      </div>
    );
  };

  WithFocusComponent.displayName = `withFocus(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return WithFocusComponent;
}