import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import axios from 'axios'
import { Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { styles } from '../style'

interface Props {
	baseUrl: string
	token: string
}

const OperatorRent: React.FC<Props> = ({ baseUrl, token}) => {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null)
	const [scanned, setScanned] = useState<boolean>(false)
	const [rentInfos, setRentInfos] = useState<any>()

	const askForCameraPermission = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		setHasPermission(status === 'granted')
	}

	useEffect(() => {
		askForCameraPermission()
	}, [])

	const getRentInfos = (url: string) => {
		axios({
			method: 'get',
			url: url!,
			headers: {
				token,
			}
		}).then(res => {
			// @ts-ignore
			const rentArray = res.data.filter(obj => obj.rents.length > 0)
			if(rentArray.length > 0) setRentInfos({
				_id: rentArray[0].rents[0]._id,
				has_started: rentArray[0].rents[0].has_started,
			})
		}).catch(err => console.log(err))
	}

	const handleBarCodeScanned = async ({ type, data }: any) => {
		setScanned(true)
		getRentInfos(data)
	}

	const startRent = () => {
		axios({
			method: 'patch',
			url: `${baseUrl}/rents/${rentInfos._id}`,
			headers: {
				token,
			},
			data: {
				update: 'start',
			}
		}).then(res => {
			rentInfos(null)
			setScanned(false)
		}).catch(err => console.log(err))
	}
	const endRent = () => {
		axios({
			method: 'patch',
			url: `${baseUrl}/rents/${rentInfos._id}`,
			headers: {
				token,
			},
			data: {
				update: 'end',
			}
		}).then(res => {
			rentInfos(null)
			setScanned(false)
		}).catch(err => console.log(err))
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
						onPress={() => {
							setRentInfos(null)
							setScanned(false)
						}}
					>
						Scanner à nouveau
					</Button>
				</View>
			)}
		</ScrollView>
	)
}
export default OperatorRent