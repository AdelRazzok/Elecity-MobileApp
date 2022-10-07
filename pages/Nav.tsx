import { useState } from 'react'
import { BottomNavigation } from 'react-native-paper'
import Rent from './Rent'
import Home from './Home'
import Settings from './Settings'
import { mainColor } from '../style'

const RentRoute = () => <Rent />
const DashRoute = () => <Home />
const SettingsRoute = () => <Settings />

const Nav: React.FC = () => {
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
export default Nav