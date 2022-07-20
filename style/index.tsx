import { StyleSheet } from 'react-native'

export const mainColor: string = '#35DDF0'

export const styles = StyleSheet.create({
	container: {
		paddingBottom: 80,
		paddingHorizontal: 24,
	},
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		paddingTop: 80,
	},
	logo: {
		width: 150,
		height: 50,
	},
	title: {
		paddingVertical: 48,
		textAlign: 'center',
		fontSize: 26,
		fontWeight: '700',
	},
	button: {
		paddingVertical: 8,
		backgroundColor: mainColor,
	},
	link: {
		paddingTop: 16,
		textAlign: 'center',
		fontSize: 16,
		textDecorationLine: 'underline',
	}
})