import { Navbar } from './components';
import UseContext from './context/UseContext';
import Io from './pages/hoes/io';

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
