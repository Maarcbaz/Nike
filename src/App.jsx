import { Navbar } from './components';
import UseContext from './context/UseContext';
import { PopularProducts, Home, SuperQuality } from './pages';
function App() {
	return (
		<>
			<UseContext>
				<Navbar />
				<Home />
				<PopularProducts />
				<SuperQuality />
			</UseContext>
		</>
	);
}

export default App;
