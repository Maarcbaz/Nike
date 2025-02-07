import { Navbar } from './components';
import UseContext from './context/UseContext';
import { PopularProducts, Home } from './pages';
function App() {
	return (
		<>
			<UseContext>
				<Navbar />
				<Home />
				<PopularProducts />
				
			</UseContext>
		</>
	);
}

export default App;
