import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import MaskedInputField from '../../components/ui/masked-input/masked-input-field';
import { schemaMain, TypeSchemaMain } from '../../utils/zod';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux-hooks';
import { saveDataMain } from '../../store/slices/form-slice';
import TextField from '../../components/ui/input';
import { socialData } from '../../data';
import LinkSocial from '../../components/ui/link-social/link-social';
import styles from './styles.module.css';
import ButtonStart from '../../components/ui/buttons/button-start/button-start';

const Main = () => {
	const { phone, email } = useAppSelector((state) => state.formData);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const methods = useForm<TypeSchemaMain>({
		mode: 'all',
		resolver: zodResolver(schemaMain),
		defaultValues: { phone, email }
	});
	const { handleSubmit } = methods;

	const onSubmit = (data: TypeSchemaMain) => {
		dispatch(saveDataMain(data));
		navigate('/create');
	};

	return (
		<div className="block">
			<div className={styles.profileHeader}>
				<div className={styles.profilePicture}>ЯК</div>
				<div>
					<div className={styles.profileName}>Яковлев Константин</div>
					{socialData.map((elem) => {
						return (
							<LinkSocial
								key={elem.name}
								name={elem.name}
								href={elem.href}
							/>
						);
					})}
				</div>
			</div>
			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)} className="form">
					<div className="bodyBlock mb24">
						<MaskedInputField
							label="Номер телефона"
							name="phone"
							mask="+7 (999) 999-99-99"
						/>
						<TextField
							name="email"
							label="Email"
							placeholder="Введите вашу почту"
						/>
					</div>
					<div className="footerBlock">
						<ButtonStart />
					</div>
				</form>
			</FormProvider>
		</div>
	);
};

export default Main;
