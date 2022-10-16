import { View, Text } from 'react-native'
import { styles } from '../style'

interface Props {
	userId: string
}

const UserRent: React.FC<Props> = ({ userId }) => {

	// rents/user/id
	console.log(userId)

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Vos Locations</Text>

			<Text>Vous n'avez aucune location pour le moment.</Text>
		</View>
	)
}

export default UserRent