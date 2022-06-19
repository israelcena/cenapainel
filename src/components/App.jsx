import Aside from "./aside/aside";
import Dashboard from "./dashboard/Dashboard";

export default function App() {
	return (
		<div className="container">
			<Aside />
			<Dashboard />
		</div>
	);
}
