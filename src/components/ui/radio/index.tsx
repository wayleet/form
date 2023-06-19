import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './styles.module.css';

interface RadioProps {
	value: number;
}
const Radio: FC<RadioProps> = ({ value }) => {
	const { register } = useFormContext();
	return (
		<div className={styles.groupLine}>
			<label className={`${styles.groupLabel} ${styles.label}`}>
				<input
					id={`field-radio-group-option-${value}`}
					className={styles.radio}
					type="radio"
					value={value}
					{...register('radioGroup')}
				/>
				{value}
				<span className={styles.customRadio} />
			</label>
		</div>
	);
};

export default Radio;
