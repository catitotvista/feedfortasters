import React, { createContext, useContext, useRef, useState } from 'react';
import { Toast } from '../components/feedback/Toast.jsx';

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [message, setMessage] = useState(null);
  const timerRef = useRef(null);

  const notify = (m) => {
    setMessage(m);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setMessage(null), 3200);
  };

  return (
    <ToastContext.Provider value={notify}>
      {children}
      {message ? (
        <div style={{ position: 'fixed', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: 80 }}>
          <Toast tone="success">{message}</Toast>
        </div>
      ) : null}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
