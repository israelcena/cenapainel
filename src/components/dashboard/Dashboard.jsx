import Insight from "./insights/Insight";

export default function Dashboard() {
	return (
		<main>
			<h1>Dashboard</h1>
			<div className="date">
				<input type="date" />
				<div className="insights">
					<Insight
						title={"Vendas"}
						amount={"1020,00"}
						percentage={81}
						time={"Ultimas 24 horas"}
					/>
					<Insight
						title={"Gastos"}
						amount={"1110,00"}
						percentage={81}
						time={"Ultimas 24 horas"}
					/>
					<Insight
						title={"Lucros"}
						amount={"16540,00"}
						percentage={21}
						time={"Ultimas 24 horas"}
					/>
				</div>
			</div>
		</main>
	);
}
