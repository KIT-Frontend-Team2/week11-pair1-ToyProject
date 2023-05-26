import MainPage from 'pages/Main'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'

function App() {
	return (
		<ThemeProvider theme={theme}>
			<MainPage />
		</ThemeProvider>
	)
}

export default App
