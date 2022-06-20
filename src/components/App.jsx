import Aside from "./aside/Aside";
import Dashboard from "./dashboard/Dashboard";
import Right from "./rightSide/Right";

export default function App() {
	return (
		<div className="container">
			<Aside />
			<Dashboard />
			<Right />
		</div>
	);
}
