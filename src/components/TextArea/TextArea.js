import React from 'react';
import styles from './TextArea.module.css';

function TextArea({ id, label, value, setter }) {
	return (
		<>
			<label
				htmlFor={id}
				className={styles.label}
				style={{ alignSelf: 'baseline' }}>
				{label}
			</label>

			<div className={styles.inputWrapper}>
				<form
					onSubmit={(event) => {
						event.preventDefault();
					}}>
					<textarea
						id={id}
						className={styles.messageInput}
						value={value}
						onChange={(event) => {
							setter(event.target.value);
						}}
					/>
				</form>
			</div>
		</>
	);
}

export default TextArea;
