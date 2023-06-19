import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IFormData, IResponse } from '../types';

export const formApi = createApi({
	reducerPath: 'formApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.sbercloud.ru/content/v1/'
	}),
	endpoints: (builder) => ({
		addFormData: builder.mutation<IResponse, IFormData>({
			query: (formData) => ({
				url: 'bootcamp/frontend',
				method: 'POST',
				body: formData
			})
		})
	})
});

export const { useAddFormDataMutation } = formApi;
