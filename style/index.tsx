// 	$electricBlue: #35DDF0;
// $darkSilver: #8693AB;
// $lightSilver: #BDD4E7;
// $darkFont: #01030D;
// $white: #EAEAEA;
// $lightContrast: #F6F6F6;
// $darkGray: #C3CBDC;
// $lightGray: #EDF1F4;


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
	},
	home_container: {
		flex: 1,
		paddingBottom: 105
	},
	logoHome: {
		alignSelf: 'center',
		marginTop: 10
	},
	helloUser: {
		alignSelf: 'center',
		padding: 15,
		fontFamily: 'Montserrat_400Regular',
		fontSize: 16

	},
	parcLocate: {
		alignSelf: 'center',
		marginTop: 40,
		fontFamily: 'Montserrat_400Regular',
		fontSize: 18
	},
	mapLh: {
		marginTop: 30,
		width: 330,
		height: 330,
		borderRadius: 15,
		alignSelf: 'center'
	},
	models: {
		alignSelf: 'center',
		fontFamily: 'Montserrat_400Regular',
		marginTop: 50,
		fontSize: 18,
	},


	offer_card: {

		height: 200,
		width: 330,
		backgroundColor: '#EAEAEA',
		marginTop: 30,
		marginBottom: 10,
		alignSelf: 'center',
		borderRadius: 15,
		transform: [{ skewX: "-8deg" }],
		overflow: 'hidden'
	},
	shadowProp: {
		shadowColor: "#01030D",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.37,
		shadowRadius: 7.49,
		//For Android
		//elevation: 12,
	},
	car_model_container: {
		flexDirection: "row",
		alignItems: "center"
	},
	offer_name: {
		fontSize: 10,
		marginTop: 19,
		marginLeft: 10
	},

	car_offer_citadine: {
		width: 190,
		height: 120,
		marginTop: -70,
		marginLeft: 145,
	},
	car_offer_suv: {
		width: 200,
		height: 120,
		marginTop: -65,
		marginLeft: 135,
	},
	car_offer_combispace: {
		width: 200,
		height: 120,
		marginTop: -70,
		marginLeft: 140,
	},
	peugeot_logo: {
		width: 25,
		height: 25,
		marginLeft: 15,
		marginTop: 15
	},
	peugeot_plug: {
		width: 18,
		height: 18,
		marginLeft: 10,
		marginTop: 15
	},
	offer_model: {
		marginLeft: 18,
		marginTop: 10
	},
	offer_specs: {
		fontSize: 7,
		marginLeft: 18
	},
	offer_price_container:{
		flexDirection: 'row',
		alignItems:'baseline',
		marginLeft: 5,
		marginTop: 32
	},
	offer_price: {
	},
	offer_hour: {
		fontSize: 8,
	}
})