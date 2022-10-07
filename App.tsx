import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login'
import Register from './pages/Register'
import Nav from './pages/Nav'
import AuthProvider from './context/AuthContext'

const Stack = createNativeStackNavigator()

const App: React.FC = () => {
	return (
		<AuthProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Login'>
					<Stack.Screen
						name='Login'
						component={Login}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name='Register'
						component={Register}
						options={{ headerShown: false }}
					/>

					<Stack.Screen
						name='Nav'
						component={Nav}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AuthProvider>
	)
}
export default App