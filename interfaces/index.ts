export interface loginValues {
	mail: string
	password: string
}

export interface registerValues {
	first_name: string
	last_name: string
	street: string
	zipcode: string
	city: string
	birth_date: string
	phone: string
	mail: string
	password: string
	passwordConfirm?: string
}

export interface updateValues {
	first_name: string
	last_name: string
	street: string
	zipcode: string
	city: string
	birth_date: string
	phone: string
}