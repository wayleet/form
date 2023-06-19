import { Sex } from '../data';

export interface IFormData {
	phone: string;
	email: string;
	nickname: string;
	name: string;
	surname: string;
	sex: Sex;
	advantages: string[];
	checkboxGroup: number[];
	radioGroup: number;
	about: string;
}

export interface IResponse {
	message: string;
	status: string;
}

export interface IStepperSteps {
	stepNumber: number;
	stepIndex: number;
}

export interface ISocialData {
	name: string;
	href: string;
}

export interface FormDataState {
	phone: string;
	email: string;
	nickname: string;
	name: string;
	surname: string;
	sex: Sex | undefined;
	advantages: IAdvantage[];
	checkboxGroup: string[];
	radioGroup: string;
	about: string;
}

export interface IAdvantage {
	name: string;
}

export interface SexOptions {
	title: string;
	value: keyof typeof Sex;
}
export interface AdvantageObj {
	name: string;
}
