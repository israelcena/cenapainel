import { MdAnalytics } from "react-icons/md";
export default function Insight({ title, amount, percentage, time }) {
	return (
		<div className="insight">
			<MdAnalytics />
			<div className="insights--main-content">
				<div className="insights--text">
					<h3>{title}</h3>
					<p className="insights--text-amount">R$ {amount}</p>
				</div>
				<div className="insights--progress">
					<svg>
						<circle cx="38" cy="38" r="36" />
					</svg>
					<div className="insights--percentage">
						<p>{percentage}%</p>
					</div>
				</div>
			</div>
			<small className="insights--text-muted">
				<p>{time}</p>
			</small>
		</div>
	);
}
