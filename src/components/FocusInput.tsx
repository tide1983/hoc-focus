import React from 'react';
import { withFocus, type WithFocusProps } from '../hoc/withFocus';

const FocusInput: React.FC<WithFocusProps> = ({ focused }) => {
  return (
    <div style={{ 
      backgroundColor: '#222', 
      padding: '20px', 
      color: '#fff', 
      fontFamily: 'sans-serif',
      width: '300px'
    }}>
      <input 
        type="text" 
        style={{ 
          width: '100%', 
          padding: '8px', 
          backgroundColor: '#333', 
          color: '#fff', 
          border: '1px solid #555',
          outline: 'none',
          marginBottom: '10px'
        }} 
      />
      <div>Focused: {focused ? 'Yes' : 'No'}</div>
    </div>
  );
};

export const FocusInputWithFocus = withFocus(FocusInput);