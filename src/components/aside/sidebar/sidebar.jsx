// Data
import { menuItens } from "./menuItens";

// Icons
import * as MaterialDesign from "react-icons/md";

// Styles
import "./sidebarStyles.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			{menuItens.map((item) => {
				return (
					<a key={item.id} className="nav-itens" href={item.path}>
						<MaterialDesign.MdOutlineDashboard className="menu-icon" />
						<h3>{item.name}</h3>
					</a>
				);
			})}
			<a class="nav-itens active" href="/logout">
				<MaterialDesign.MdLogout className="menu-icon" />
				<h3>Active</h3>
			</a>
			<a class="nav-itens" href="/logout">
				<MaterialDesign.MdLogout className="menu-icon" />
				<h3>Logout</h3>
			</a>
		</div>
	);
}
