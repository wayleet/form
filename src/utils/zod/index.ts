import * as z from 'zod';
import { Sex } from '../../data';

export const schemaMain = z.object({
	phone: z.string().nonempty('Введите номер'),
	email: z.string().email({ message: 'Некорректный email' })
});

export type TypeSchemaMain = z.infer<typeof schemaMain>;

export const schema1 = z.object({
	nickname: z
		.string()
		.min(2, 'Никнейм не может быть короче 2 символов')
		.max(30, { message: 'Никнейм не должен превышать 30 символов' })
		.regex(/^[a-zA-Z0-9]+$/, {
			message: 'Никнейм может содержать только английские буквы и цифры'
		}),
	name: z
		.string()
		.min(2, { message: 'Имя не может быть короче 2 символов' })
		.max(50, { message: 'Имя не должно превышать 50 символов' })
		.regex(/^[a-zA-Zа-яА-Я ]+$/, {
			message: 'Имя может содержать только русские и английские буквы'
		}),
	surname: z
		.string()
		.min(2, { message: 'Фамилия не может быть короче 2 символов' })
		.max(50, { message: 'Фамилию не должно превышать 50 символов' })
		.regex(/^[a-zA-Zа-яА-Я ]+$/, {
			message: 'Фамилия может содержать только русские и английские буквы'
		}),
	sex: z.nativeEnum(Sex, {
		errorMap: (issue) => {
			return { message: 'Выберите пол' };
		}
	})
});

export type TypeSchema1 = z.infer<typeof schema1>;

export const schema2 = z.object({
	advantages: z.array(
		z.object({
			name: z
				.string()
				.nonempty({ message: 'Не может быть пустым значением' })
		})
	),
	checkboxGroup: z
		.array(z.string())
		.min(1, 'Выберите один или более элементов'),
	radioGroup: z.string().nonempty('Выберите элемент')
});

export type TypeSchema2 = z.infer<typeof schema2>;

export const schema3 = z.object({
	about: z
		.string()
		.nonempty('Заполните поле')
		.refine((val) => val.replace(/\s+/g, '').length <= 200, {
			message: 'Количество символов должно быть не больше 200'
		})
});

export type TypeSchema3 = z.infer<typeof schema3>;
