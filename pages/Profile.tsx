import { View, Text, ScrollView } from 'react-native'
import { Button, TextInput } from 'react-native-paper'
import { Formik, ErrorMessage } from 'formik'
import { updateValues } from '../interfaces'
import { updateSchema } from '../schemas'
import { styles, mainColor } from '../style'

interface Props {
	initialValues: updateValues
}

const Profile: React.FC<Props> = ({ initialValues }) => {

	return (
		<ScrollView>
			<Text style={styles.title}>Profil</Text>

			<Formik
				initialValues={initialValues}
				validationSchema={updateSchema}
				enableReinitialize
				onSubmit={(values: updateValues, { setSubmitting }) => {
					setSubmitting(false)
					console.log(values)
				}}
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

						<Button
							mode='contained'
							style={styles.button}
							onPress={handleSubmit}
						>
							Modifier mes informations
						</Button>
					</View>
				)}
			</Formik>
		</ScrollView>
	)
}
export default Profile