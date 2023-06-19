import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	FieldValues,
	UseFormGetValues,
	UseFormHandleSubmit
} from 'react-hook-form';
import { saveDataStep1 } from '../../store/slices/form-slice';
import { useAppDispatch } from '../../utils/hooks/redux-hooks';
import { TypeSchema1 } from '../../utils/zod';

type FooterBlockProps<
	TFieldValues extends FieldValues = FieldValues,
	TContext = any
> = {
	getValues: UseFormGetValues<TypeSchema1>;
	handleSubmit: UseFormHandleSubmit<TypeSchema1>;
	saveAndNext: (data: TypeSchema1) => void;
};

const FooterBlockStep1: FC<FooterBlockProps> = ({
	getValues,
	handleSubmit,
	saveAndNext
}) => {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	return (
		<div className="footerBlock">
			<button
				onClick={() => {
					dispatch(saveDataStep1(getValues()));
					navigate('/');
				}}
				id="button-back"
				type="button"
				className="button"
			>
				Назад
			</button>
			<button
				onClick={handleSubmit(saveAndNext)}
				id="button-next"
				type="submit"
				className="button buttonNext"
			>
				Вперед
			</button>
		</div>
	);
};

export default FooterBlockStep1;
