import { Footer, Navbar } from './components';
import UseContext from './context/UseContext';
import {
	PopularProducts,
	Home,
	SuperQuality,
	Services,
	SpecialOffer,
	Review,
	Subscribe,
} from './pages';
function App() {
	return (
		<>
			<UseContext>
				<Navbar />
				<Home />
				<PopularProducts />
				<SuperQuality />
				<Services />
				<SpecialOffer />
				<Review />
				<Subscribe />
				<Footer />
			</UseContext>
		</>
	);
}

export default App;
