import { useEffect } from 'react';

function useEscapeKey(callBack) {
	useEffect(() => {
		function handleKeyDown(event) {
			if (event.key === 'Escape') {
				callBack(event);
			}
		}
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [callBack]);
}

export default useEscapeKey;
