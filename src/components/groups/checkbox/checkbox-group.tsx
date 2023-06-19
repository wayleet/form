import React, { FC } from 'react';
import { checkboxValues } from '../../../data';
import Checkbox from '../../ui/checkbox';
import styles from './styles.module.css';

interface CheckboxGroupProps {
	errorMessage: string | undefined;
}
const CheckboxGroup: FC<CheckboxGroupProps> = ({ errorMessage }) => {
	return (
		<div className={styles.group}>
			<div className={styles.label}>Checkbox group</div>
			<div className={styles.groupBlock}>
				{checkboxValues.map((elem) => {
					return <Checkbox value={elem} key={elem} />;
				})}
			</div>
			<div className="inputError">{errorMessage}</div>
		</div>
	);
};

export default CheckboxGroup;
