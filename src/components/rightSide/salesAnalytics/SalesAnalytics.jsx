import OnlineOrders from "./onlineOrders/OnlineOrders";
import { MdAddShoppingCart } from "react-icons/md";
import "./salesAnalyticsStyles.css";

export default function SalesAnalytics() {
	return (
		<div className="sales-analytics">
			<h2>Sales Analytics</h2>
			<OnlineOrders
				orderName="Online Orders"
				orderClass="online"
				orderTime="Últimas 24 horas"
				orderPorcent="+39%"
				orderNumber="3849"
				orderColor="text-green"
			/>

			<OnlineOrders
				orderName="Offline Orders"
				orderClass="offline"
				orderTime="2 dias"
				orderPorcent="-29%"
				orderNumber="149"
				orderColor="text-red"
			/>

			<OnlineOrders
				orderName="Offline Orders"
				orderClass="offline"
				orderTime="5 dias"
				orderPorcent="+3%"
				orderNumber="389"
				orderColor="text-yellow"
			/>

			<div className="add-product">
				<MdAddShoppingCart className="add-product--icon" />
				<h3>Adicionar Produtos</h3>
			</div>
		</div>
	);
}
