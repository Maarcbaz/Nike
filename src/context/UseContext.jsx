import React, { useState, useContext, createContext } from 'react';

const HamburgerState = createContext();
const HamburgerFunc = createContext();

export const useHamburgerFunc = () => {
	return useContext(HamburgerFunc);
};

export const useHamburgerState = () => {
	return useContext(HamburgerState);
};

const UseContext = ({ children }) => {
	const [hamburgerActive, setHamburgerActive] = useState(true);
	function ToggleHamburgerActive() {
		return setHamburgerActive((pre) => !pre);
	}
	return (
		<div>
			<HamburgerState.Provider value={hamburgerActive}>
				<HamburgerFunc.Provider value={ToggleHamburgerActive}>
					{children}
				</HamburgerFunc.Provider>
			</HamburgerState.Provider>
		</div>
	);
};

export default UseContext;
