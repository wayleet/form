import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavigationState {
	currentStepIndex: number;
	quantityAllSteps: number;
}

const initialState: NavigationState = {
	currentStepIndex: 0,
	quantityAllSteps: 3
};

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {
		nextStep: (state) => {
			if (state.currentStepIndex < state.quantityAllSteps - 1) {
				state.currentStepIndex += 1;
			}
		},
		backStep: (state) => {
			if (state.currentStepIndex > 0) {
				state.currentStepIndex -= 1;
			}
		},
		goToIndexStep: (state, action: PayloadAction<number>) => {
			state.currentStepIndex = action.payload;
		}
	}
});

export const { nextStep, backStep, goToIndexStep } = navigationSlice.actions;

export default navigationSlice.reducer;
