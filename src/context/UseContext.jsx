import React, { useState, useContext, createContext, useEffect } from 'react';

const HamburgerState = createContext();
const HamburgerFunc = createContext();

const StickyState = createContext();

export const useHamburgerFunc = () => {
	return useContext(HamburgerFunc);
};

export const useHamburgerState = () => {
	return useContext(HamburgerState);
};

export const useStickyState = () => {
	return useContext(StickyState);
};

const UseContext = ({ children }) => {
	const [hamburgerActive, setHamburgerActive] = useState(true);	
	const [sticky, setSticky] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 50 ? setSticky(true) : setSticky(false);
		});
	});

	function ToggleHamburgerActive() {
		return setHamburgerActive((pre) => !pre);
	}
	return (
		<div>
			<HamburgerState.Provider value={hamburgerActive}>
				<HamburgerFunc.Provider value={ToggleHamburgerActive}>
					<StickyState.Provider value={sticky}>{children}</StickyState.Provider>
				</HamburgerFunc.Provider>
			</HamburgerState.Provider>
		</div>
	);
};

export default UseContext;
