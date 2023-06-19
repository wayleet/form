import { ISocialData, IStepperSteps, SexOptions } from '../types';

export enum Sex {
	man = 'man',
	woman = 'woman'
}

export const sexOptions: SexOptions[] = [
	{ title: 'Мужской', value: Sex.man },
	{ title: 'Женский', value: Sex.woman }
];

export const StepsForStepper: IStepperSteps[] = [
	{ stepNumber: 2, stepIndex: 1 },
	{ stepNumber: 3, stepIndex: 2 }
];

export const checkboxValues = [1, 2, 3];
export const radioValues = [1, 2, 3];

export const socialData: ISocialData[] = [
	{ name: 'Telegram', href: 'https://t.me/wayleet' },
	{ name: 'GitHub', href: 'https://github.com/wayleet' },
	{
		name: 'Resume',
		href: 'https://drive.google.com/file/d/1f3cTAZDqX-piZNCitOuSOvBV9QjD5bvt/view'
	}
];
