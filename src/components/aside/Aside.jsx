// Components
import Sidebar from "./sidebar/Sidebar";

// icons
import { MdClose } from "react-icons/md";

// styles
import "./asideStyles.css";

export default function Aside() {
	return (
		<aside>
			<div className="top">
				<div className="logo">
					<img className="logo-img" src="./images/logo.jpg" alt="Logo" />
					<h3>
						<span className="logo--first-text">Cena</span>
						<span className="text-primary">Painel</span>
					</h3>
				</div>
				<div className="close" id="close-btn">
					<MdClose className="close-icon" />
				</div>
			</div>
			<Sidebar />
		</aside>
	);
}
