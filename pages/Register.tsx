import { View, Image, Text, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { Formik, ErrorMessage } from 'formik'
import { registerValues } from '../interfaces'
import { registerSchema } from '../schemas'
import { styles, mainColor } from '../style'

const Register: React.FC = ({ navigation }: any) => {
	const initialValues: registerValues = {
		first_name: '',
		last_name: '',
		street: '',
		zipcode: '',
		city: '',
		birth_date: '',
		phone: '',
		mail: '',
		password: '',
		passwordConfirm: '',
	}

	const register = async (values: registerValues) => {
		const { first_name, last_name, street, zipcode, city, birth_date, phone, mail, password } = values
		const user = {
			first_name,
			last_name,
			address: {
				street,
				zipcode,
				city,
			},
			birth_date,
			phone,
			mail,
			password,
			role: 'user',
		}
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		}

		const res = await fetch('http://localhost:5000/api/v1/users/register', options)
		if(res.status === 201) {
			navigation.navigate('Login')
		} else {
			console.log('Error during user creation')
		}
	}

	return (
		<ScrollView>
			<View style={styles.logo_container}>
				<Image
					source={require('../assets/logo.png')}
					style={styles.logo}
				/>
			</View>

			<Text style={styles.title}>{'Inscrivez-vous dès maintenant'.toUpperCase()}</Text>

			<Formik
				initialValues={initialValues}
				validationSchema={registerSchema}
				onSubmit={values => register(values)}
			>
				{({ handleChange, handleBlur, handleSubmit, values }) => (
					<View style={styles.form_container}>
						<TextInput
							mode='outlined'
							label='Prénom'
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('first_name')}
							onBlur={handleBlur('first_name')}
							value={values.first_name}
						/>
						<ErrorMessage
							name='first_name'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Nom'	
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('last_name')}
							onBlur={handleBlur('last_name')}
							value={values.last_name}
						/>
						<ErrorMessage
							name='last_name'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Adresse'
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('street')}
							onBlur={handleBlur('street')}
							value={values.street}
						/>
						<ErrorMessage
							name='street'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Code postal'
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('zipcode')}
							onBlur={handleBlur('zipcode')}
							value={values.zipcode}
						/>
						<ErrorMessage
							name='zipcode'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Ville'
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('city')}
							onBlur={handleBlur('city')}
							value={values.city}
						/>
						<ErrorMessage
							name='city'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Date de naissance'
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('birth_date')}
							onBlur={handleBlur('birth_date')}
							value={values.birth_date}
						/>
						<ErrorMessage
							name='birth_date'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Adresse mail'
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('mail')}
							onBlur={handleBlur('mail')}
							value={values.mail}
						/>
						<ErrorMessage
							name='mail'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Téléphone'
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('phone')}
							onBlur={handleBlur('phone')}
							value={values.phone}
						/>
						<ErrorMessage
							name='phone'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Mot de passe'
							secureTextEntry
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('password')}
							onBlur={handleBlur('password')}
							value={values.password}
						/>
						<ErrorMessage
							name='password'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<TextInput
							mode='outlined'
							label='Confirmation mot de passe'
							secureTextEntry
							selectionColor={mainColor}
							activeOutlineColor={mainColor}
							style={{ marginBottom: 16 }}
							onChangeText={handleChange('passwordConfirm')}
							onBlur={handleBlur('passwordConfirm')}
							value={values.passwordConfirm}
						/>
						<ErrorMessage
							name='passwordConfirm'
							render={msg => <Text style={styles.error_msg}>{msg}</Text>}
						/>

						<Button
							mode='contained'
							style={styles.button}
							onPress={handleSubmit}
						>
							M'inscrire
						</Button>
					</View>
				)}
			</Formik>

			<Text
				onPress={() => navigation.navigate('Login')}
				style={styles.link}
			>
				Déjà membre ?
			</Text>
		</ScrollView>
	)
}
export default Register