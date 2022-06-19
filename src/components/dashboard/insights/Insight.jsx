// icons
import { MdAnalytics } from "react-icons/md";

// styles
import "./insightStyles.css";
export default function Insight({
	title,
	amount,
	percentage,
	time,
	icon,
	iconColor,
}) {
	return (
		<div className="insight">
			<MdAnalytics
				className="insight--icon"
				style={{ background: `${iconColor}` }}
			/>
			<div className="insights--main-content">
				<div className="insights--text">
					<h3>{title}</h3>
					<p>R$ {amount}</p>
				</div>
				<div className="insights--progress">
					<svg>
						<circle
							cx="38"
							cy="38"
							r="36"
							stroke-dasharray="220"
							stroke-dashoffset="20"
							stroke-width="14"
						/>
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
