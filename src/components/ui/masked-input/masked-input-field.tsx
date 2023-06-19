import React, { FC } from 'react';
import InputMask from 'react-input-mask';
import { FieldValues, useFormContext } from 'react-hook-form';

interface Props {
	label: string;
	name: keyof FieldValues;
	mask: string;
}

const MaskedInputField: FC<Props> = ({ label, name, mask }) => {
	const {
		register,
		formState: { errors }
	} = useFormContext();
	return (
		<div className="inputBlock">
			<div className="inputEnter">
				<label htmlFor={name}>{label}</label>
				<InputMask
					className="inputGeneral inputBig"
					mask={mask}
					placeholder="+7 999 999-99-99"
					{...register(name)}
				/>
				<div className="inputError">
					{errors?.[name]?.message?.toString()}
				</div>
			</div>
		</div>
	);
};

export default MaskedInputField;
