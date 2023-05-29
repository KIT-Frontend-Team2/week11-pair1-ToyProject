import MainPage from 'pages/Main'
import './App.css'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import PostStoreProvider from 'data/store/posts'

function App() {
	return (
		<PostStoreProvider>
			<ThemeProvider theme={theme}>
				<MainPage />
			</ThemeProvider>
		</PostStoreProvider>
	)
}

export default App
