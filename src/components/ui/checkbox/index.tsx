import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './styles.module.css';

interface CheckboxProps {
	value: number;
}

const Checkbox: FC<CheckboxProps> = ({ value }) => {
	const { register } = useFormContext();
	return (
		<div className={styles.groupLine}>
			<label className={`${styles.groupLabel} ${styles.label}`}>
				<input
					id={`field-checkbox-group-option-${value}`}
					type="checkbox"
					className={styles.checkbox}
					value={value}
					{...register('checkboxGroup')}
				/>
				{value}
				<span className={styles.customCheckbox} />
			</label>
		</div>
	);
};

export default Checkbox;
