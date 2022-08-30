// import { useContext, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
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
						name='Home'
						component={Home}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</AuthProvider>
	)
}
export default App