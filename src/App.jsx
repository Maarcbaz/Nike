import { Navbar } from './components';
import UseContext from './context/UseContext';
import Home from './pages/Home/Home';
function App() {
	return (
		<>
			<UseContext>
				<Navbar />
				<Home />
			</UseContext>
		</>
	);
}

export default App;
