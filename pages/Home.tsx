import { useContext } from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'

const Home: React.FC = () => {
	const { auth } = useContext(AuthContext)
	console.log(auth)

	return (
		<View>
			<Text>Home</Text>
		</View>
	)
}
export default Home