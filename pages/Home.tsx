// @ts-ignore
import { useState } from 'react'
import { Text } from 'react-native-paper'
import { View, Image, StatusBar, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { styles } from '../style'

interface Props {
	name: string
}

const Home: React.FC<Props> = ({ name }) => {
	let [fontsLoaded] = useFonts({
		Montserrat_400Regular,
	})

	if (!fontsLoaded) {
		return null
	}

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


				<Text style={styles.helloUser}>Bonjour {name} !</Text>
				<ScrollView>
					<Text style={styles.parcLocate}>Retrouvez nous près de chez vous</Text>
					<View style={styles.shadowProp}>
						<Image
							style={[styles.mapLh, styles.shadowProp]}
							source={require('../assets/lhMap.png')}
						/>
					</View>


					<Text style={styles.models}>Nos offres</Text>

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