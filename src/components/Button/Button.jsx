// import React from 'react'
import { useContext } from "react";
import { badgeTheme } from "../Badges/Badge";

const Button = ({children}) => {
    const { btnType, btnColour, setBtnColour } = useContext(badgeTheme);

  return (
		<button onClick={() => setBtnColour('badge--blue')} className={`${btnColour} ${btnType}`}>
			{children}
		</button>
	);
}

export default Button