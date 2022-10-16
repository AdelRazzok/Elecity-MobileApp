import { useState, useEffect } from 'react'
import axios from 'axios'
import { View, Text, ScrollView, Image } from 'react-native'
import { styles } from '../style'

interface Props {
	baseUrl: string
	userId: string
	token: string
}

const UserRent: React.FC<Props> = ({ baseUrl, userId, token }) => {
	const [userRents, setUserRents] = useState<any>(null)

	useEffect(() => {
		(() => {
			axios({
				method: 'get',
				url: `${baseUrl}/rents/user/${userId}`,
				headers: {
					token,
				}
			}).then(res => {
				if(res.data[0].rents) {
					const data = res.data[0].rents
					
					setUserRents(data.map((rent: any, i: number) => {
						const date = new Date(rent.start_date)
						return (
							<View key={i} style={styles.container}>
								<Text>
									Location du {('0' + date.getDay()).slice(-2)}/{('0' + date.getMonth()).slice(-2)}/{date.getFullYear()} :
								</Text>
								<Text>Status : {rent.end_date_confirmed ? 'Terminée' : 'En cours'}</Text>
								<Text>Prix : {rent.price} €</Text>
								<Image style={{width: 150, height: 150, marginTop: 15, marginBottom: 30}} source={{uri: rent.qrcode}} />
							</View>
						)
					}))
				}
			}).catch(err => console.log(err))
		})()
	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Vos Locations</Text>

			<ScrollView>
				{userRents ?
					userRents
				:
					<Text>Vous n'avez aucune location pour le moment.</Text>}
			</ScrollView>
		</View>
	)
}

export default UserRent