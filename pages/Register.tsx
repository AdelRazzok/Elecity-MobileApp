import { View, Image, Text, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { styles, mainColor } from '../style'

const Register: React.FC = ({ navigation }: any) => {
	return (
		<ScrollView>
			<View style={styles.wrapper}>
				<Image
					source={require('../assets/logo.png')}
					style={styles.logo}
				/>
			</View>

			<Text style={styles.title}>{'Inscrivez-vous dès maintenant'.toUpperCase()}</Text>

			<View style={styles.container}>
				<TextInput
					mode='outlined'
					label='Prénom'
					placeholder='Prénom'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Nom'
					placeholder='Nom'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Adresse'
					placeholder='Adresse'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Code postal'
					placeholder='Code postal'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Ville'
					placeholder='Ville'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Adresse mail'
					placeholder='Adresse mail'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Téléphone'
					placeholder='Téléphone'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Mot de passe'
					placeholder='Mot de passe'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 16 }}
				/>

				<TextInput
					mode='outlined'
					label='Confirmation'
					placeholder='Confirmation'
					selectionColor={mainColor}
					activeOutlineColor={mainColor}
					style={{ marginBottom: 32 }}
				/>

				<Button
					mode='contained'
					style={styles.button}
				>
					Me connecter
				</Button>

				<Text
					onPress={() => navigation.navigate('Login')}
					style={styles.link}
				>
					Déjà membre ?
				</Text>
			</View>
		</ScrollView>
	)
}
export default Register