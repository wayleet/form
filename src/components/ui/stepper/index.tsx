import React, { FC } from 'react';
import { useAppSelector } from '../../../utils/hooks/redux-hooks';
import { IStepperSteps } from '../../../types';
import styles from './styles.module.css';

interface StepperProps {
	steps: IStepperSteps[];
}

const Stepper: FC<StepperProps> = ({ steps }) => {
	const { currentStepIndex } = useAppSelector((state) => state.navigation);
	return (
		<div className="header mb67">
			<div>
				<div className={styles.progressItem}>
					<div className="progressBox active">
						<div className="progressCircle" />
						<div className="progressNumber">1</div>
					</div>
					{steps.map((elem) => {
						return (
							<div
								key={elem.stepNumber}
								className={`progressBlock ${
									currentStepIndex >= elem.stepIndex
										? 'active'
										: ''
								}`}
							>
								<div className="progressLine">
									<div className="line" />
								</div>
								<div className="progressBox">
									<div className="progressCircle" />
									<div className="progressNumber">
										{elem.stepNumber}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Stepper;
