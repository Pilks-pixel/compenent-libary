import Button from "../Button/Button";
import { useState, createContext } from "react";

const badgeTheme = createContext(null);
export {badgeTheme}

const Badge = ({children, colour = 'red', shape = 'pill'}) => {
	const btnType = `badge--${shape}`
	const [btnColour, setBtnColour] = useState(`badge--${colour}`);

	return (
		<badgeTheme.Provider value={{ btnType, btnColour, setBtnColour }}>
			<Button>{children}</Button>
		</badgeTheme.Provider>
	);
};

export default Badge;

