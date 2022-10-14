// @ts-ignore
import { API_BASE_URL } from '@env'
import { useState, useEffect, useContext } from 'react'
import { BottomNavigation } from 'react-native-paper'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import OperatorRent from './OperatorRent'
import UserRent from './UserRent'
import Home from './Home'
import Profile from './Profile'
import { mainColor } from '../style'

const Nav: React.FC = () => {
	const { auth } = useContext(AuthContext)
	const [hasRights, setHasRights] = useState<boolean>(false)
	const [index, setIndex] = useState<number>(1)
	const [routes] = useState([
		{ key: 'rent', title: 'Locations', icon: 'car', },
		{ key: 'dash', title: 'Tableau de bord', icon: 'view-dashboard', },
		{ key: 'profile', title: 'Profil', icon: 'account', },
	])

	useEffect(() => {
		(() => {
			axios({
				method: 'get',
				url: `${API_BASE_URL}/users/infos`,
				headers: {
					'Authorization': `Bearer ${auth}`,
				}
			}).then(res => {
				console.log(res.data)
			}).catch(err => console.log(err))
		})()
	}, [])

	const RentRoute = () => hasRights ? <UserRent /> : <OperatorRent />
	const DashRoute = () => <Home />
	const ProfileRoute = () => <Profile />

	const renderScene = BottomNavigation.SceneMap({
		rent: RentRoute,
		dash: DashRoute,
		profile: ProfileRoute,
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