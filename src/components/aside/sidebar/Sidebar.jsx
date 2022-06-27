// Data
import { menuItens } from "./menuItens";

// Icons
import * as MaterialDesign from "react-icons/md";

// Styles
import "./sidebarStyles.css";

export default function Sidebar() {
	return (
		<div className="sidebar">
			{menuItens.map(({ id, path, name, alert }) => {
				switch (name) {
					case "Dashboard":
						return (
							<a key={id} className="nav-itens" href={path}>
								<MaterialDesign.MdOutlineDashboard className="menu-icon" />
								<h3>{name}</h3>
								{alert ? <span className="message-count">{alert}</span> : null}
							</a>
						);
					case "Mensagens":
						return (
							<a key={id} className="nav-itens" href={path}>
								<MaterialDesign.MdMessage className="menu-icon" />
								<h3>{name}</h3>
								{alert ? <span className="message-count">{alert}</span> : null}
							</a>
						);
					case "Sobre nós":
						return (
							<a key={id} className="nav-itens" href={path}>
								<MaterialDesign.MdOutlineAssignmentInd className="menu-icon" />
								<h3>{name}</h3>
								{alert ? <span className="message-count">{alert}</span> : null}
							</a>
						);
					case "Contato":
						return (
							<a key={id} className="nav-itens" href={path}>
								<MaterialDesign.MdContactSupport className="menu-icon" />
								<h3>{name}</h3>
								{alert ? <span className="message-count">{alert}</span> : null}
							</a>
						);
					default:
						return (
							<a key={id} className="nav-itens" href={path}>
								<h3>{name}</h3>
								{alert ? <span className="message-count">{alert}</span> : null}
							</a>
						);
				}
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
