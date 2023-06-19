import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAppSelector } from '../../utils/hooks/redux-hooks';
import { schema3, TypeSchema3 } from '../../utils/zod';
import { useAddFormDataMutation } from '../../services/form-service';
import Modal from '../ui/modal';
import { convertorFormData } from '../../utils/convertor-form-data';
import Textarea from '../ui/textarea';
import FooterBlockStep3 from '../footers/footer-block-step3';

const Step3 = () => {
	const [showModal, setShowModal] = useState(false);
	const formData = useAppSelector((state) => state.formData);
	const { about } = formData;
	const [addFormData, { isSuccess, isError }] = useAddFormDataMutation();
	const methods = useForm<TypeSchema3>({
		resolver: zodResolver(schema3),
		mode: 'all',
		defaultValues: { about }
	});
	const {
		handleSubmit,
		watch,
		getValues,
		formState: { errors }
	} = methods;

	useEffect(() => {
		if (isSuccess || isError) {
			setShowModal(true);
		}
	}, [isSuccess, isError]);

	const handleAddFormData = async () => {
		await addFormData(convertorFormData(formData));
	};

	const quantity = watch('about')?.replace(/\s+/g, '').length;
	return (
		<>
			{showModal && (
				<Modal statusOk={isSuccess} setShowModal={setShowModal} />
			)}
			<FormProvider {...methods}>
				<div className="bodyBlock">
					<form>
						<Textarea
							errorMessage={errors?.about?.message}
							quantity={quantity}
						/>
					</form>
				</div>
				<FooterBlockStep3
					getValues={getValues}
					handleSubmit={handleSubmit}
					handleAddFormData={handleAddFormData}
				/>
			</FormProvider>
		</>
	);
};

export default Step3;
