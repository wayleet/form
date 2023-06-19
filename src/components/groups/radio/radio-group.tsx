import React, { FC } from 'react';
import { radioValues } from '../../../data';
import Radio from '../../ui/radio';
import styles from './styles.module.css';

interface RadioGroupProps {
	errorMessage: string | undefined;
}
const RadioGroup: FC<RadioGroupProps> = ({ errorMessage }) => {
	return (
		<div className={styles.group}>
			<div className={styles.label}>Radio group</div>
			<div className={styles.groupBlock}>
				{radioValues.map((elem) => {
					return <Radio value={elem} key={elem} />;
				})}
			</div>
			<div className="inputError">{errorMessage}</div>
		</div>
	);
};

export default RadioGroup;
