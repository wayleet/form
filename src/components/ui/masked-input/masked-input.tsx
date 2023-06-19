import React, { FC } from 'react';
import { PatternFormat } from 'react-number-format';
import { Controller, FieldValues, useFormContext } from 'react-hook-form';

interface Props {
	label: string;
	name: keyof FieldValues;
}

const MaskedInput: FC<Props> = ({ label, name }) => {
	const {
		formState: { errors },
		control
	} = useFormContext();
	return (
		<div>
			<div className="inputBlock">
				<div className="inputEnter">
					<label htmlFor={name}>{label}</label>
					<Controller
						control={control}
						name="phone"
						render={({ field: { onChange, name, value } }) => (
							<PatternFormat
								format="+7 (###) ###-##-##"
								className="inputGeneral inputBig"
								allowEmptyFormatting
								name={name}
								value={value}
								onChange={onChange}
							/>
						)}
					/>
					<div className="inputError">
						{errors?.[name]?.message?.toString()}
					</div>
				</div>
			</div>
		</div>
	);
};

export default MaskedInput;
