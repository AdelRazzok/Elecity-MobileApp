// @ts-ignore
import { API_BASE_URL } from '@env'
import { useContext, useState } from 'react'
import axios from 'axios'
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

	const login = (values: loginValues) => {
		const data = JSON.stringify(values)
		axios({
			method: 'post',
			url: `http://192.168.1.29:80/users/login`,
			headers: {
				'Content-Type': 'application/json',
			},
			data
		}).then(res => {
			if(res.status === 200) {
				setAuth(res.data.accessToken)
				setIsValid(true)
				navigation.navigate('Nav')
			} else {
				setIsValid(false)
			}
		})
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