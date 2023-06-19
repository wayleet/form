import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps {
	name: string;
	label: string;
	placeholder?: string;
}

const TextField: FC<TextFieldProps> = ({ name, label, placeholder }) => {
	const {
		register,
		formState: { errors }
	} = useFormContext();
	return (
		<div className="inputBlock">
			<div className="inputEnter">
				<div className="label">{label}</div>
				<input
					id={`field-${name}`}
					type="text"
					placeholder={placeholder}
					className={`inputGeneral ${
						name === 'email' ? 'inputBig' : ''
					}`}
					{...register(`${name}`)}
				/>
				<div className="inputError">
					{errors?.[name]?.message?.toString()}
				</div>
			</div>
		</div>
	);
};

export default TextField;
