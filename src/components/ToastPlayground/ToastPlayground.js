import React, { useState } from 'react';

import Button from '../Button';
import RadioButton from '../RadioButton';
import TextArea from '../TextArea';
import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [type, setType] = useState('notice');
	const [message, setMessage] = React.useState('');

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<TextArea
						id='message'
						label='Message'
						value={message}
						setter={setMessage}
					/>
					{/* <label
						htmlFor='message'
						className={styles.label}
						style={{ alignSelf: 'baseline' }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea id='message' className={styles.messageInput} />
					</div> */}
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
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
