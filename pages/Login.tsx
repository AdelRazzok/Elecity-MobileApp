import { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Image, Text, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { Formik, ErrorMessage } from 'formik'
import { loginValues } from '../interfaces'
import { loginSchema } from '../schemas'
import { styles, mainColor } from '../style'
import { AuthContext } from '../context/AuthContext'

const Login: React.FC = ({ navigation }: any) => {
	const { auth, setAuth } = useContext(AuthContext)
	const [isValid, setIsValid] = useState<boolean>(true)
	const initialValues: loginValues = {
		mail: '',
		password: '',
	}

	const login = async (values: loginValues) => {
		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		}

		try {
			const res = await fetch(`http://192.168.1.153:5000/api/v1/users/login`, options)
	
			if(res.status === 200) {
				const data = await res.json()
				setAuth(data.accessToken)
				setIsValid(true)
				navigation.navigate('Home')
			} else {
				setIsValid(false)
			}
		} catch(error) {
			console.log(error)
		}
	}

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.logo_container}>
					<Image
						source={require('../assets/logo.png')}
						style={styles.logo}
					/>
				</View>

				<Text style={styles.title}>{'Louez propre et local en toute facilité...'.toUpperCase()}</Text>

				<Formik
					initialValues={initialValues}
					validationSchema={loginSchema}
					onSubmit={(values, { setSubmitting }) => {
						setSubmitting(false)
						login(values)
					}}
				>
					{({ handleChange, handleBlur, handleSubmit, values }) => (
						<View style={styles.form_container}>
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

							{!isValid && <Text style={styles.error_msg}>E-mail / Mot de passe incorrect</Text>}

							<Button
								mode='contained'
								style={styles.button}
								onPress={handleSubmit}
							>
								Me connecter
							</Button>
						</View>
					)}
				</Formik>

				<Text
					style={styles.link}
					onPress={() => navigation.navigate('Register')}
				>
					Pas encore membre ?
				</Text>
			</ScrollView>
		</SafeAreaView>
 	)
}
export default Login