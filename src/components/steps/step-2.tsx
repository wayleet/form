import React from 'react';
import { FormProvider, useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks';
import { saveDataStep2 } from '../../store/slices/form-slice';
import { schema2, TypeSchema2 } from '../../utils/zod';
import { nextStep } from '../../store/slices/navigation-slice';
import FieldAdvantage from '../ui/field-advantages';
import ButtonAddAdvantage from '../ui/buttons/add-advantage/button-add-advantage';
import CheckboxGroup from '../groups/checkbox/checkbox-group';
import RadioGroup from '../groups/radio/radio-group';
import FooterBlockStep2 from '../footers/footer-block-step2';

const Step2 = () => {
	const { advantages, checkboxGroup, radioGroup } = useAppSelector(
		(state) => state.formData
	);
	const dispatch = useAppDispatch();

	const methods = useForm<TypeSchema2>({
		resolver: zodResolver(schema2),
		mode: 'all',
		defaultValues: {
			advantages,
			checkboxGroup,
			radioGroup
		}
	});
	const {
		handleSubmit,
		control,
		getValues,
		formState: { errors }
	} = methods;

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'advantages'
	});
	const saveAndNext = (data: TypeSchema2) => {
		dispatch(saveDataStep2(data));
		dispatch(nextStep());
	};

	return (
		<>
			<FormProvider {...methods}>
				<div className="bodyBlock">
					<form>
						<div className="inputs">
							<div className="inputsTitle label">Advantages</div>
							<div className="fieldAdvantagesBlock">
								{fields.map((field, index) => {
									return (
										<FieldAdvantage
											key={field.id}
											index={index}
											advantages={advantages}
											remove={remove}
											errorMessage={
												errors.advantages?.[index]?.name
													?.message
											}
										/>
									);
								})}
							</div>
							<ButtonAddAdvantage append={append} />
						</div>
						<CheckboxGroup
							errorMessage={errors?.checkboxGroup?.message}
						/>
						<RadioGroup
							errorMessage={errors?.radioGroup?.message}
						/>
					</form>
				</div>
				<FooterBlockStep2
					getValues={getValues}
					handleSubmit={handleSubmit}
					saveAndNext={saveAndNext}
				/>
			</FormProvider>
		</>
	);
};

export default Step2;
