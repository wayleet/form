import { FormDataState, IFormData } from '../types';
import { Sex } from '../data';

export const convertorFormData = (formData: FormDataState) => {
	const object: IFormData = {
		radioGroup: Number(formData.radioGroup),
		checkboxGroup: formData.checkboxGroup.map((elem) => Number(elem)),
		advantages: formData.advantages.map((elem) => elem.name),
		name: formData.name,
		about: formData.about,
		email: formData.email,
		sex: formData.sex as Sex,
		surname: formData.surname,
		nickname: formData.nickname,
		phone: formData.phone
	};
	return object;
};
