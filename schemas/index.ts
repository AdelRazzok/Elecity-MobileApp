import * as Yup from 'yup'

const emptyErr: string = 'Champ requis'
const tooLongErr: string = 'Champ trop long'
const invalidErr: string = 'Format invalide'

export const loginSchema = Yup.object().shape({
	mail: Yup
		.string()
		.email(invalidErr)
		.required(emptyErr),
	password: Yup.string().required(emptyErr),
})

export const registerSchema = Yup.object().shape({
	first_name: Yup
		.string()
		.max(50, tooLongErr)
		.required(emptyErr),
	last_name: Yup
		.string()
		.max(50, tooLongErr)
		.required(emptyErr),
	mail: Yup
		.string()
		.email(invalidErr)
		.required(emptyErr),
	phone: Yup
		.string()
		.length(10, invalidErr)
		.required(emptyErr),
	birth_date: Yup
		.string()
		.length(10, invalidErr)
		.required(emptyErr),
	street: Yup
		.string()
		.max(50, tooLongErr)
		.required(emptyErr),
	city: Yup
		.string()
		.max(50, tooLongErr)
		.required(emptyErr),
	zipcode: Yup
		.string()
		.length(5, invalidErr)
		.required(emptyErr),
	password: Yup
		.string()
		.min(5, 'Mot de passe trop court')
		.max(255, tooLongErr)
		.required(emptyErr),
	passwordConfirm: Yup
		.string()
		.oneOf([Yup.ref('password'), null], 'Les mots de passe doivent correspondre')
		.required(emptyErr),
})