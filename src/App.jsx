import { Navbar } from './components';
import UseContext from './context/UseContext';
function App() {
	return (
		<>
			<UseContext>
				<Navbar />
			</UseContext>
		</>
	);
}

export default App;
