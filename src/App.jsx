import About from './components/About'
import Dashboard from './components/Dashboard'
import Events from './components/Events'
import Portrait from './components/Portrait'
import Welcome from './components/Welcome'
import Geography from './components/Geography'
import Hobby from './components/Hobby'
import './scss/app.scss'

function App() {
	return (
		<>
			<Welcome />
			<Dashboard />
			<About />
			<Events />
			<Portrait />
			<Geography />
			<Hobby />
		</>
	)
}

export default App
