import React, { FC } from 'react';
import {
	FieldValues,
	UseFormGetValues,
	UseFormHandleSubmit
} from 'react-hook-form';
import { saveDataStep3 } from '../../store/slices/form-slice';
import { backStep } from '../../store/slices/navigation-slice';

import { useAppDispatch } from '../../utils/hooks/redux-hooks';
import { TypeSchema3 } from '../../utils/zod';

type FooterBlockProps<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any
> = {
	getValues: UseFormGetValues<TypeSchema3>;
	handleSubmit: UseFormHandleSubmit<TypeSchema3>;
	handleAddFormData: () => void;
};

const FooterBlockStep3: FC<FooterBlockProps> = ({
	getValues,
	handleSubmit,
	handleAddFormData
}) => {
	const dispatch = useAppDispatch();
	return (
		<div className="footerBlock">
			<button
				id="button-back"
				onClick={() => {
					dispatch(saveDataStep3(getValues()));
					dispatch(backStep());
				}}
				className="button"
			>
				Назад
			</button>
			<button
				id="button-send"
				onClick={handleSubmit(handleAddFormData)}
				type="submit"
				className="button buttonNext"
			>
				Отправить
			</button>
		</div>
	);
};

export default FooterBlockStep3;
