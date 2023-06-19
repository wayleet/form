import React, { FC } from 'react';
import { addAdvantage } from '../../../../store/slices/form-slice';
import { useAppDispatch } from '../../../../utils/hooks/redux-hooks';
import { AdvantageObj } from '../../../../types';
import styles from './styles.module.css';

interface ButtonAddAdvantageProps {
	append: (obj: AdvantageObj) => void;
}
const ButtonAddAdvantage: FC<ButtonAddAdvantageProps> = ({ append }) => {
	const dispatch = useAppDispatch();
	return (
		<button
			className={styles.buttonAdd}
			id="button-add"
			onClick={() => {
				dispatch(addAdvantage({ name: '' }));
				append({ name: '' });
			}}
			type="button"
		/>
	);
};

export default ButtonAddAdvantage;
