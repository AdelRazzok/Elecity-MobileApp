import { useState } from 'react'
import { BottomNavigation, Button, Text } from 'react-native-paper'
import Rent from '../pages/Rent'
import Settings from './Settings'
import { styles, mainColor } from '../style'

const RentRoute = () => <Rent />
const DashRoute = () => (
	<>
		<Text style={styles.title}>Tableau de bord</Text>
	</>
)
const SettingsRoute = () => <Settings />

const Home: React.FC = () => {
	const [index, setIndex] = useState<number>(1)
	const [routes] = useState([
		{ key: 'rent', title: 'Locations', icon: 'car', },
		{ key: 'dash', title: 'Tableau de bord', icon: 'view-dashboard', },
		{ key: 'settings', title: 'Paramètres', icon: 'cog', },
	])

	const renderScene = BottomNavigation.SceneMap({
		rent: RentRoute,
		dash: DashRoute,
		settings: SettingsRoute,
	})

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={renderScene}
			activeColor={'#fff'}
			inactiveColor={'#303030'}
			barStyle={{ backgroundColor: mainColor }}
		/>
	)
}
export default Home