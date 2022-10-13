// @ts-ignore
import { API_BASE_URL } from '@env'
import { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { styles } from '../style'

const Rent: React.FC = () => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState<boolean>(false)
	const [url, setUrl] = useState<string | null>(null)
	const [infos, setInfos] = useState<any>()

	useEffect(() => {
		askForCameraPermission()
	}, [])

	// useEffect pour recupérer le role, si user -> historique des rents, si operator -> scanner de QR codes
	
	useEffect(() => {
		// const getRentInfos = async () => {
		// 	const options = {
		// 		method: 'GET',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 			token: 'fcacbd6ab1d8b11bdba1559dec6fce16',
		// 		},
		// 	}
		// 	const res = await (await fetch(url!, options)).json()
			
		// 	// D'abbord formater les informations qu'on reçoit et les stocker dans infos

		// 	setInfos(res)
		// }
		// if(url != null) getRentInfos()
		console.log(url)
	}, [url])
		
	const askForCameraPermission = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		setHasPermission(status === 'granted')
	}

	const handleBarCodeScanned = async ({ type, data }: any) => {
		setScanned(true)
		setUrl(data)
	}

	const startRent = async () => {
		// newData -> body avec paramètre a voir sur discord
		const newData = {
			has_started: true,
			start_date_confirmed: new Date(),
		}
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				token: 'fcacbd6ab1d8b11bdba1559dec6fce16',
			},
			body: JSON.stringify(newData),
		}

		const res = await fetch(`${API_BASE_URL}`, options)
	}

	const endRent = async () => {
		// newData -> body avec paramètre a voir sur discord
		const newData = {
			end_date_confirmed: new Date(),
		}
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				token: 'fcacbd6ab1d8b11bdba1559dec6fce16',
			},
			body: JSON.stringify(newData),
		}

		const res = await fetch(`${API_BASE_URL}`, options)
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
		<View style={styles.container}>
			<Text style={styles.title}>Gestion de location</Text>
			<View style={styles.barcodebox}>
				<BarCodeScanner
					style={{ height: 720, width: 720 }}
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
				/>
			</View>

			{scanned && (
				<View style={styles.rent_button_container}>
					{
						// !infos.rent.has_started ?
						true ?
							<Button
								mode='contained'
								style={styles.button}
								onPress={() => startRent()}
							>
								Commencer la location
							</Button>
						:
							<Button
								mode='contained'
								style={styles.button}
								onPress={() => endRent()}
							>
								Arrêter la location
							</Button>
					}
					<Button
						mode='contained'
						style={styles.button}
						onPress={() => setScanned(false)}
					>
						Scanner à nouveau
					</Button>
				</View>
			)}
		</View>
	)
}
export default Rent