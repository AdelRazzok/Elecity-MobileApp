import { View, Image, Text } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { styles, mainColor } from '../style'

const Login: React.FC = ({ navigation }: any) => {
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Image
					source={require('../assets/logo.png')}
					style={styles.logo}
				/>
			</View>

			<Text style={styles.title}>{'Louez propre et local en toute facilité...'.toUpperCase()}</Text>

			<View>
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
					label='Mot de passe'
					placeholder='Mot de passe'
					secureTextEntry
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
			</View>

			<Text
				style={styles.link}
				onPress={() => navigation.navigate('Register')}
			>
				Pas encore inscrit ?
			</Text>
		</View>
 	)
}
export default Login