import React, { FC } from 'react';
import {
	FieldValues,
	UseFormGetValues,
	UseFormHandleSubmit
} from 'react-hook-form';
import { saveDataStep2 } from '../../store/slices/form-slice';
import { useAppDispatch } from '../../utils/hooks/redux-hooks';
import { TypeSchema2 } from '../../utils/zod';
import { backStep } from '../../store/slices/navigation-slice';

type FooterBlockProps<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any
> = {
	getValues: UseFormGetValues<TypeSchema2>;
	handleSubmit: UseFormHandleSubmit<TypeSchema2>;
	saveAndNext: (data: TypeSchema2) => void;
};

const FooterBlockStep2: FC<FooterBlockProps> = ({
	getValues,
	handleSubmit,
	saveAndNext
}) => {
	const dispatch = useAppDispatch();
	return (
		<div className="footerBlock">
			<button
				id="button-back"
				className="button"
				onClick={() => {
					dispatch(saveDataStep2(getValues()));
					dispatch(backStep());
				}}
			>
				Назад
			</button>
			<button
				id="button-next"
				className="button buttonNext"
				onClick={handleSubmit(saveAndNext)}
			>
				Вперед
			</button>
		</div>
	);
};

export default FooterBlockStep2;
