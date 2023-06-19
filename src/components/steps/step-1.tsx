import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks';
import { saveDataStep1 } from '../../store/slices/form-slice';
import { schema1, TypeSchema1 } from '../../utils/zod';
import { nextStep } from '../../store/slices/navigation-slice';
import TextField from '../ui/input';
import SexSelect from '../ui/select';
import { sexOptions } from '../../data';
import FooterBlockStep1 from '../footers/footer-block-step1';

const Step1 = () => {
	const { nickname, name, surname, sex } = useAppSelector(
		(state) => state.formData
	);
	const dispatch = useAppDispatch();

	const methods = useForm<TypeSchema1>({
		resolver: zodResolver(schema1),
		mode: 'all',
		defaultValues: { nickname, name, surname, sex }
	});
	const { handleSubmit, getValues } = methods;
	const saveAndNext = (data: TypeSchema1) => {
		dispatch(saveDataStep1(data));
		dispatch(nextStep());
	};

	return (
		<>
			<FormProvider {...methods}>
				<div className="bodyBlock">
					<form>
						<TextField
							name="nickname"
							label="Nickname"
							placeholder="Введите никйнем"
						/>
						<TextField
							name="name"
							label="Name"
							placeholder="Введите ваше имя"
						/>
						<TextField
							name="surname"
							label="Surname"
							placeholder="Введите вашу фамилию"
						/>
						<SexSelect
							sexOptions={sexOptions}
							label="Sex"
							name="sex"
						/>
					</form>
				</div>
				<FooterBlockStep1
					getValues={getValues}
					handleSubmit={handleSubmit}
					saveAndNext={saveAndNext}
				/>
			</FormProvider>
		</>
	);
};

export default Step1;
