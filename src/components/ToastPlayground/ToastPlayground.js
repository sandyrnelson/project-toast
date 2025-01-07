import React, { useState, use } from 'react';

import { ToastContext } from '../ToastProvider';

import Button from '../Button';
import RadioButton from '../RadioButton';
import TextArea from '../TextArea';
import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [type, setType] = useState('notice');
	const [message, setMessage] = React.useState('');
	const { toasts, setToasts } = use(ToastContext);

	function createToast() {
		const id = crypto.randomUUID();
		setToasts([...toasts, { id: id, content: message, type: type }]);
		setMessage('');
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf/>
			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<TextArea
						id='message'
						label='Message'
						value={message}
						setter={setMessage}
					/>
				</div>
				<div className={styles.row}>
					<RadioButton
						name='varient'
						options={VARIANT_OPTIONS}
						label='Variant'
						selected={type}
						setter={setType}
					/>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button
							onClick={() => {
								createToast();
							}}>
							Pop Toast!
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
