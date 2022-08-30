import { createContext, useState } from 'react'

interface AuthContextInterface {
	auth: {}
	setAuth: React.Dispatch<React.SetStateAction<{}>>
}

export const AuthContext = createContext<AuthContextInterface | any>({})

const AuthProvider: React.FC<React.ReactNode> = ({ children }: any) => {
	const [auth, setAuth] = useState()
	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider