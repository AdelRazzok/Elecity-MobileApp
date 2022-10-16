import { useState, useEffect, useContext } from 'react'
import { BottomNavigation } from 'react-native-paper'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext'
import OperatorRent from './OperatorRent'
import UserRent from './UserRent'
import Home from './Home'
import Profile from './Profile'
import { updateValues } from '../interfaces'
import { mainColor } from '../style'

const Nav: React.FC = () => {
	const { auth } = useContext(AuthContext)
	const [hasRights, setHasRights] = useState<boolean>(false)
	const [initialValues, setInitialValues] = useState<updateValues>({
		first_name: '',
		last_name: '',
		street: '',
		zipcode: '',
		city: '',
		birth_date: '',
		phone: '',
	})
	const [userId, setUserId] = useState<string>('')
	const [index, setIndex] = useState<number>(1)
	const [routes] = useState([
		{ key: 'rent', title: 'Locations', icon: 'car', },
		{ key: 'dash', title: 'Tableau de bord', icon: 'view-dashboard', },
		{ key: 'profile', title: 'Profil', icon: 'account', },
	])

	// MANU_BASE_URL = http://192.168.1.153:5000/api/v1
	const BASE_URL = 'http://192.168.1.29:80/api/v1'

	useEffect(() => {
		(() => {
			axios({
				method: 'get',
				url: `${BASE_URL}/users/infos`,
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${auth}`,
				}
			}).then(res => {
				if(res.data) {
					const { _id, first_name, last_name, birth_date, phone, role } = res.data
					const { street, zipcode, city } = res.data.address
					setInitialValues(prev => {
						return {...prev, first_name, last_name, street, zipcode, city, birth_date, phone}
					})
					setUserId(_id)
					setHasRights(role === 'user' ? false : true)
				}
			}).catch(err => console.log(err))
		})()
	}, [])

	const RentRoute = () => hasRights ? <OperatorRent baseUrl={BASE_URL} /> : <UserRent userId={userId} />
	const DashRoute = () => <Home name={initialValues.last_name} />
	const ProfileRoute = () => <Profile initialValues={initialValues} />

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