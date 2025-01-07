import React, { use } from 'react';
import {
	AlertOctagon,
	AlertTriangle,
	CheckCircle,
	Info,
	X,
} from 'react-feather';

import { ToastContext } from '../ToastProvider';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ id, content, type }) {
	const { setToasts } = use(ToastContext);

	const IconTag = ICONS_BY_VARIANT[type];

	return (
		<div className={`${styles.toast} ${styles[type]}`}>
			<div className={styles.iconContainer}>
				<IconTag size={24} />
			</div>
			<p className={styles.content}>{content}</p>
			<button
				className={styles.closeButton}
				onClick={() => {
					setToasts((current) => current.filter((toast) => toast.id !== id));
				}}>
				<X size={24} />
				<VisuallyHidden>Dismiss message</VisuallyHidden>
			</button>
		</div>
	);
}

export default Toast;
