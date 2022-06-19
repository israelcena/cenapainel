import Aside from "./aside/Aside";
import Dashboard from "./dashboard/Dashboard";

export default function App() {
	return (
		<div className="container">
			<Aside />
			<Dashboard />
		</div>
	);
}
