import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
	return (
		<ol className={styles.wrapper}>
			{toasts?.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast
						id={toast.id}
						type={toast.type}
						content={toast.content}
						setToasts={setToasts}
					/>
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
