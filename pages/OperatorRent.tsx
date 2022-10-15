// @ts-ignore
import { API_BASE_URL, API_TOKEN } from '@env'
import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import { Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { styles } from '../style'

const OperatorRent: React.FC = () => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState<boolean>(false)
	const [url, setUrl] = useState<string | null>(null)
	const [rentInfos, setRentInfos] = useState<any>()

	useEffect(() => {
		askForCameraPermission()
	}, [])

	useEffect(() => {
		const getRentInfos = () => {
			axios({
				method: 'get',
				url: url!,
				headers: {
					token: API_TOKEN,
				}
			}).then(res => {
				// @ts-ignore
				const rentArray = res.data.filter(obj => obj.rents.length > 0)
				if(rentArray.length > 0) setRentInfos(rentArray[0].rents[0])
			})
		}
		if(url) getRentInfos()
	}, [url])

	const askForCameraPermission = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		setHasPermission(status === 'granted')
	}

	const handleBarCodeScanned = async ({ type, data }: any) => {
		setScanned(true)
		setUrl(data)
	}

	const startRent = () => {
		axios({
			method: 'patch',
			url: `${API_BASE_URL}/rents/${rentInfos._id}`,
			headers: {
				token: API_TOKEN,
			},
			data: {
				update: 'start',
			}
		})
	}

	const endRent = () => {
		axios({
			method: 'patch',
			url: `${API_BASE_URL}/rents/${rentInfos._id}`,
			headers: {
				token: API_TOKEN,
			},
			data: {
				update: 'end',
			}
		})
	}

	if (hasPermission === null) {
		return (
			<View style={styles.container}>
				<Text>Demande d'accès à la caméra en cours.</Text>
			</View>
		)
	}
	if (hasPermission === false) {
		return (
			<View style={styles.container}>
				<Text style={{ marginBottom: 20 }}>
					Elecity n'a pas accès à la caméra de votre appareil.
				</Text>

				<Button
					mode={'contained'}
					style={styles.button}
					onPress={() => askForCameraPermission()}
				>
					Autoriser caméra
				</Button>
			</View>
		)
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.title}>Gestion de location</Text>
			<View style={styles.barcodebox}>
				<BarCodeScanner
					style={StyleSheet.absoluteFillObject}
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				/>
			</View>

			{rentInfos && (
				<Button
					mode='contained'
					style={styles.button}
					onPress={() => !rentInfos.has_started ? startRent() : endRent()}
				>
					{!rentInfos.has_started ? 'Commencer la location' : 'Arrêter la location'}
				</Button>
			)}

			{scanned && (
				<View style={styles.rent_button_container}>
					<Button
						mode='contained'
						style={styles.button}
						onPress={() => setScanned(false)}
					>
						Scanner à nouveau
					</Button>
				</View>
			)}
		</ScrollView>
	)
}
export default OperatorRent