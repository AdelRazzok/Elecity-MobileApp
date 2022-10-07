import { StyleSheet } from 'react-native'

export const mainColor: string = '#35DDF0'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form_container: {
		paddingHorizontal: 24,
	},
	logo_container: {
		alignItems: 'center',
		paddingTop: 80,
	},
	logo: {
		width: 150,
		height: 50,
	},
	title: {
		textAlign: 'center',
		paddingVertical: 48,
		fontSize: 26,
		fontWeight: '700',
	},
	button: {
		paddingVertical: 8,
		color: '#fff',
		backgroundColor: mainColor,
	},
	link: {
		textAlign: 'center',
		paddingVertical: 32,
		fontSize: 16,
		textDecorationLine: 'underline',
	},
	error_msg: {
		marginBottom: 16,
		color: 'red',
	},
	barcodebox: {
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		height: 400,
		width: 400,
		overflow: 'hidden',
		borderRadius: 20,
	},
	rent_button_container: {
		padding: 32,
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	}
})