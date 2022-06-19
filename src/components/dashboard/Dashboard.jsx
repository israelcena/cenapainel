// components
import Insight from "./insights/Insight";

// styles
import "./dashboardStyles.css";

export default function Dashboard() {
	return (
		<main>
			<h1>Dashboard</h1>
			<div className="date">
				<input type="date" />
			</div>
			<div className="insights">
				<Insight
					title={"Vendas"}
					amount={"1020,00"}
					percentage={81}
					time={"Ultimas 24 horas"}
					iconColor={"#7380cc"}
				/>
				<Insight
					title={"Gastos"}
					amount={"1110,00"}
					percentage={81}
					time={"Ultimas 24 horas"}
					iconColor={"#ff7782"}
				/>
				<Insight
					title={"Lucros"}
					amount={"16540,00"}
					percentage={21}
					time={"Ultimas 24 horas"}
					iconColor={"#42f1b6"}
				/>
			</div>
		</main>
	);
}
