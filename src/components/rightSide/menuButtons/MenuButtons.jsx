import { MdMenu } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

import "./menuButtonsStyles.css";

export default function MenuButtons() {
	return (
		<>
			<button id="menu-btn">
				<MdMenu />
			</button>
			<div className="theme-toggle">
				<MdWbSunny className="toggle--active" />
				<MdDarkMode />
			</div>
		</>
	);
}
