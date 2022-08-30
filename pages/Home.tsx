import { useContext, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../style'

const Home: React.FC = () => {
	const { auth } = useContext(AuthContext)
	const [userInfos, setUserInfos] = useState<any>({})

	useEffect(() => {
		const getUserInfos = async () => {
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${auth}`,
				},
			}
			const res = await fetch('http://localhost:5000/api/v1/users/me', options)
			const data = await res.json()
			setUserInfos(data)
		}
		getUserInfos()
	}, [])

	return (
		<View>

		</View>
	)
}
export default Home