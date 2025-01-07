import React, { createContext, useCallback } from 'react';
import useEscapeKey from '../../hooks/UseEscapeKey';

export const ToastContext = createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const handleEscape = useCallback(() => {
		setToasts([]);
	}, []);

	useEscapeKey(handleEscape);

	return (
		<ToastContext.Provider value={{ toasts, setToasts }}>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
