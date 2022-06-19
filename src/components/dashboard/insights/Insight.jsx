import { MdAnalytics } from "react-icons/md";
export default function Insight({ title, amount, percentage, time }) {
	return (
		<>
			<div className="sales">
				<MdAnalytics />
			</div>
			<div className="centerContent">
				<div className="insights-text">
					<h3>{title}</h3>
					<p className="insights-text--amount">R$ {amount}</p>
				</div>
				<div className="progress">
					<svg>
						<circle cx="38" cy="38" r="36" />
					</svg>
					<div className="insights--percentage">
						<p>{percentage}%</p>
					</div>
				</div>
			</div>
			<small className="text-muted">
				<p>{time}</p>
			</small>
		</>
	);
}
