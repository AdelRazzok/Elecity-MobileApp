import { useContext, useEffect, useState } from 'react'
import { View, Image, StatusBar, Text, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';


import { AuthContext } from '../context/AuthContext'
import { styles } from '../style'

import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'

import { Pentagon, Circle, Trapezoid } from 'react-native-shape'

const Home: React.FC = () => {

	let [fontsLoaded] = useFonts({
		Montserrat_400Regular,
	});

	if (!fontsLoaded) {
		return null;
	}
	// const { auth } = useContext(AuthContext)
	// const [userInfos, setUserInfos] = useState<any>({})

	// useEffect(() => {
	// 	const getUserInfos = async () => {
	// 		const options = {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				'Authorization': `Bearer ${auth}`,
	// 			},
	// 		}
	// 		const res = await fetch('http://localhost:5000/api/v1/users/me', options)
	// 		const data = await res.json()
	// 		setUserInfos(data)
	// 	}
	// 	getUserInfos()
	// }, [])

	return (
		<View style={styles.home_container}>
			<LinearGradient

				colors={['#8693AB', '#BDD4E7', '#8693AB']}>
				<StatusBar
					hidden={true}
				/>
				<Image
					source={require('../assets/logo.png')}
					style={styles.logoHome}
				/>


				<Text style={styles.helloUser}>Bonjour Paul !</Text>
				<ScrollView>
					<Text style={styles.parcLocate}>Venez nous retrouver</Text>
					<View style={styles.shadowProp}>
						<Image
							style={[styles.mapLh, styles.shadowProp]}
							source={require('../assets/lhMap.png')}
						/>
					</View>


					<Text style={styles.models}>Location de véhicule 100% électrique</Text>

					<View style={styles.offer_card}>

						<View style={styles.car_model_container}>
							<Image
								style={styles.peugeot_logo}
								source={require('../assets/peugeot.png')}
							/>
							<Text style={styles.offer_name}>Citadine</Text>
							<Image
								style={styles.peugeot_plug}
								source={require('../assets/plug.png')}
							/>
						</View>
						<Text style={styles.offer_model}>Peugeot e-208</Text>
						<Text style={styles.offer_specs}>Electrique · Automatique · 5 places </Text>
						<View style={styles.offer_price_container}>
						<Text style={styles.offer_price}> 11 €</Text><Text style={styles.offer_hour}> /heure</Text>
						</View>

						<Image
							style={styles.car_offer_citadine}
							source={require('../assets/citadine.png')}
						/>

					</View>
					<View style={styles.offer_card}>

						<View style={styles.car_model_container}>
							<Image
								style={styles.peugeot_logo}
								source={require('../assets/peugeot.png')}
							/>
							<Text style={styles.offer_name}>Suv</Text>
							<Image
								style={styles.peugeot_plug}
								source={require('../assets/plug.png')}
							/>
						</View>
						<Text style={styles.offer_model}>Peugeot e-2008</Text>
						<Text style={styles.offer_specs}>Electrique · Automatique · 5 places </Text>
						<View style={styles.offer_price_container}>
						<Text style={styles.offer_price}> 11 €</Text><Text style={styles.offer_hour}> /heure</Text>
						</View>

						<Image
							style={styles.car_offer_suv}
							source={require('../assets/suv.png')}
						/>

					</View>
					<View style={styles.offer_card}>

						<View style={styles.car_model_container}>
							<Image
								style={styles.peugeot_logo}
								source={require('../assets/peugeot.png')}
							/>
							<Text style={styles.offer_name}>Combispace</Text>
							<Image
								style={styles.peugeot_plug}
								source={require('../assets/plug.png')}
							/>
						</View>
						<Text style={styles.offer_model}>Peugeot e-Rifter</Text>
						<Text style={styles.offer_specs}>Electrique · Automatique · 5 places </Text>
						<View style={styles.offer_price_container}>
						<Text style={styles.offer_price}> 11 €</Text><Text style={styles.offer_hour}> /heure</Text>
						</View>

						<Image
							style={styles.car_offer_combispace}
							source={require('../assets/combispace.png')}
						/>
					</View>


				</ScrollView>

			</LinearGradient>

		</View>
	)
}
export default Home