import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { styles } from '../style';

const Rent: React.FC = () => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState<boolean>(false)
	const [url, setUrl] = useState<string>('')
	const [hasStarted, setHasStarted] = useState<boolean | null>(null)

	useEffect(() => {
		askForCameraPermission()
	}, [])
	
	useEffect(() => {
		const getHasStarted = async () => {
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					token: 'fcacbd6ab1d8b11bdba1559dec6fce16',
				},
			}
			const res = await (await fetch(url, options)).json()
			console.log(res)
			// setHasStarted(res)
		}
		if(url != null) getHasStarted()
	}, [url])
		
	const askForCameraPermission = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		setHasPermission(status === 'granted')
	}

	const handleBarCodeScanned = async ({ type, data }: any) => {
		setScanned(true)
		setUrl(data)
	}

	const startRent = async (url: string) => {
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				token: 'fcacbd6ab1d8b11bdba1559dec6fce16',
			},
		}
		// PATCH has_started -> true
	}
	const endRent = async (url: string) => {
		console.log(`Ending rent : ${url}`)
		const options = {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
		}
		// PATCH has_started -> false
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

					<Button
						mode='contained'
						style={styles.button}
						onPress={() => startRent(url)}
					>
						Commencer la location
					</Button>

					<Button
						mode='contained'
						style={styles.button}
						onPress={() => endRent(url)}
					>
						Arrêter la location
					</Button>

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