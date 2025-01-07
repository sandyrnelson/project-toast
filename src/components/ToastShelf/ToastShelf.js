import React, { use } from 'react';

import { ToastContext } from '../ToastProvider';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
	const { toasts } = use(ToastContext);

	return (
		<ol className={styles.wrapper}>
			{toasts?.map((toast) => (
				<li key={toast.id} className={styles.toastWrapper}>
					<Toast id={toast.id} type={toast.type} content={toast.content} />
				</li>
			))}
		</ol>
	);
}

export default ToastShelf;
