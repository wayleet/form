import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { SexOptions } from '../../../types';

interface SelectProps {
	sexOptions: SexOptions[];
	name: string;
	label: string;
}

const SexSelect: FC<SelectProps> = ({ sexOptions, name, label }) => {
	const {
		register,
		formState: { errors }
	} = useFormContext();
	return (
		<div className="inputBlock">
			<div className="inputEnter">
				<div className="label">{label}</div>
				<select
					className="inputGeneral select"
					id={`field-${name}`}
					{...register(name, { required: 'Обязательное поле' })}
				>
					<option value="" hidden>
						Не выбрано
					</option>
					{sexOptions.map((sex) => (
						<option key={sex.value} value={sex.value}>
							{sex.title}
						</option>
					))}
				</select>
				<div className="inputError">
					{errors?.[name]?.message?.toString()}
				</div>
			</div>
		</div>
	);
};

export default SexSelect;
