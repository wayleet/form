import React, { FC } from 'react';
import { UseFieldArrayRemove, useFormContext } from 'react-hook-form';
import DeleteSvg from '../../../assets/images/delete.svg';
import { deleteAdvantage } from '../../../store/slices/form-slice';
import { useAppDispatch } from '../../../utils/hooks/redux-hooks';
import { IAdvantage } from '../../../types';
import styles from './styles.module.css';

interface IFieldAdvantage {
	index: number;
	advantages: IAdvantage[];
	remove: UseFieldArrayRemove;
	errorMessage: string | undefined;
}
const FieldAdvantage: FC<IFieldAdvantage> = ({
	index,
	advantages,
	remove,
	errorMessage
}) => {
	const dispatch = useAppDispatch();
	const { register } = useFormContext();
	return (
		<div className={styles.fieldBlock} key={index}>
			<div className={styles.fieldAdvantages}>
				<input
					id={`field-advantages-${index + 1}`}
					placeholder="placeholder"
					className="inputGeneral"
					{...register(`advantages.${index}.name`)}
				/>

				<button
					className={styles.buttonRemove}
					id={`button-remove-${index + 1}`}
					onClick={() => {
						if (advantages.length > 1) {
							dispatch(deleteAdvantage(index));
							remove(index);
						}
					}}
					type="button"
				>
					<img src={DeleteSvg} alt="" />
				</button>
			</div>
			<div className="inputError">{errorMessage}</div>
		</div>
	);
};

export default FieldAdvantage;
