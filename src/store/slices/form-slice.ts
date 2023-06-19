import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	TypeSchema1,
	TypeSchema2,
	TypeSchema3,
	TypeSchemaMain
} from '../../utils/zod';
import { FormDataState } from '../../types';

const initialState: FormDataState = {
	phone: '+7 (904) 289-97-90',
	email: 'wayleet@yandex.ru',
	nickname: '',
	name: '',
	surname: '',
	sex: undefined,
	advantages: [{ name: '' }, { name: '' }, { name: '' }],
	checkboxGroup: [],
	radioGroup: '',
	about: ''
};

export const formDataSlice = createSlice({
	name: 'formData',
	initialState,
	reducers: {
		saveDataMain: (state, action: PayloadAction<TypeSchemaMain>) => {
			state.email = action.payload.email;
			state.phone = action.payload.phone;
		},
		saveDataStep1: (state, action: PayloadAction<TypeSchema1>) => {
			state.nickname = action.payload.nickname;
			state.name = action.payload.name;
			state.surname = action.payload.surname;
			state.sex = action.payload.sex;
		},
		saveDataStep2: (state, action: PayloadAction<TypeSchema2>) => {
			state.advantages.map((elem, index) => {
				elem.name = action.payload.advantages[index].name;
			});
			state.checkboxGroup = action.payload.checkboxGroup;
			state.radioGroup = action.payload.radioGroup;
		},
		saveDataStep3: (state, action: PayloadAction<TypeSchema3>) => {
			state.about = action.payload.about;
		},
		reset: () => {
			return initialState;
		},
		deleteAdvantage: (state, action: PayloadAction<number>) => {
			state.advantages.splice(action.payload, 1);
		},
		addAdvantage: (state, action: PayloadAction<{ name: string }>) => {
			state.advantages.push(action.payload);
		}
	}
});

export const {
	saveDataMain,
	saveDataStep1,
	saveDataStep2,
	saveDataStep3,
	reset,
	deleteAdvantage,
	addAdvantage
} = formDataSlice.actions;

export default formDataSlice.reducer;
