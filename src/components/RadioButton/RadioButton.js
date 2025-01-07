import React from 'react';
import styles from './RadioButton.module.css';

function RadioButton({ name, options, selected, setter, label = '' }) {
	return (
		<>
			{label !== '' && <div className={styles.label}>{label}</div>}
			<form
				onSubmit={(event) => {
					event.preventDefault();
				}}>
				<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
					{options.map((option) => {
						return (
							<label key={option} htmlFor={`${name}-${option}`}>
								<input
									id={`${name}-${option}`}
									type='radio'
									name={name}
									value={option}
									checked={selected === option}
									onChange={(event) => {
										setter(event.target.value);
									}}
								/>
								{option}
							</label>
						);
					})}
				</div>
			</form>
		</>
	);
}

export default RadioButton;
