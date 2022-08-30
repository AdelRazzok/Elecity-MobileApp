import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
	return (
		// <NavigationContainer>
		// 	<Stack.Navigator initialRouteName='Login'>
		// 		<Stack.Screen
		// 			name='Login'
		// 			component={Login}
		// 			options={{ title: 'Connexion' }}
		// 		/>
		// 		<Stack.Screen
		// 			name='Register'
		// 			component={Register}
		// 			options={{ title: 'Inscription' }}
		// 		/>
		// 	</Stack.Navigator>		
		// </NavigationContainer>
		<Home />
	)
}
export default App