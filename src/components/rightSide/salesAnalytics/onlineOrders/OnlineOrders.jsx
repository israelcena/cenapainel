// icons
import { MdShoppingCart } from "react-icons/md";

// styles
import "./onlineOrdersStyles.css";

export default function OnlineOrders({
	orderName,
	orderClass,
	orderTime,
	orderPorcent,
	orderColor,
	orderNumber,
}) {
	return (
		<div className={`sales--item ${orderClass}`}>
			<div className="sales--icon">
				<MdShoppingCart />
			</div>
			<div className="sales--right">
				<div className="sales--right-info">
					<h3>{orderName}</h3>
					<small className="text-muted">{orderTime}</small>
				</div>
				<h5 className={`${orderColor}`}>{orderPorcent}</h5>
				<h3>{orderNumber}</h3>
			</div>
		</div>
	);
}
