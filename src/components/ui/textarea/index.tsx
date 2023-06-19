import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import styles from './styles.module.css';

interface TextareaProps {
	errorMessage: string | undefined;
	quantity: number;
}
const Textarea: FC<TextareaProps> = ({ errorMessage, quantity }) => {
	const { register } = useFormContext();
	return (
		<div className="inputBlock">
			<div className="inputEnter">
				<div className="label">About</div>
				<textarea
					id="field-about"
					className={styles.textarea}
					placeholder="About"
					{...register('about')}
				/>
				<div className={styles.textareaFooter}>
					<div className="inputError">{errorMessage}</div>
					<div className={styles.textareaCount}>
						{quantity} / {200}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Textarea;
