import React, { ReactNode } from 'react';
import Step1 from '../../components/steps/step-1';
import Step2 from '../../components/steps/step-2';
import { useAppSelector } from '../../utils/hooks/redux-hooks';
import Step3 from '../../components/steps/step-3';
import Stepper from '../../components/ui/stepper';
import { StepsForStepper } from '../../data';

const MultistepForm = () => {
	const { currentStepIndex } = useAppSelector((state) => state.navigation);
	const Steps: ReactNode[] = [
		<Step1 key="one" />,
		<Step2 key="two" />,
		<Step3 key="three" />
	];
	return (
		<div className="block">
			<Stepper steps={StepsForStepper} />
			{Steps[currentStepIndex]}
		</div>
	);
};

export default MultistepForm;
