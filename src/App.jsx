import { useEffect } from 'react';
import { Footer, Navbar } from './components';
import UseContext from './context/UseContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
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
	useEffect(() => {
		AOS.init({
			offset: 100,
			duration: 800,
			easing: 'ease-in-sine',
			delay: 100,
		});
		AOS.refresh();
	}, []);
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
