// components
import Order from "./Order";

// styles
import "./recentOrdersStyles.css";

export default function RecentOrders() {
	return (
		<div className="recent-order">
			<h2>Recent Orders</h2>
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Numero</th>
						<th>Pagamento</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody className="recent-order--body">
					<Order
						orderName="Mini Drone"
						orderNumber="123456789"
						orderPayment="Cartão de Crédito"
						orderStatus="Pago"
						orderLink="Detalhes"
					/>
					<Order
						orderName="Drone de Pouso"
						orderNumber="654655"
						orderPayment="Dinheiro"
						orderStatus="Pago"
						orderLink="Detalhes"
					/>
					<Order
						orderName="Mega Drone"
						orderNumber="1235878965"
						orderPayment="BitCoin"
						orderStatus="Aguardando Pagamento"
						orderLink="Detalhes"
					/>
					<Order
						orderName="Drone commander"
						orderNumber="126549541"
						orderPayment="Dinheiro"
						orderStatus="Aguardando Pagamento"
						orderLink="Detalhes"
					/>
					<Order
						orderName="Mini Drone"
						orderNumber="11654655"
						orderPayment="Dinheiro"
						orderStatus="Pago"
						orderLink="Detalhes"
					/>
					<Order
						orderName="Drone de Pouso"
						orderNumber="654655"
						orderPayment="Dinheiro"
						orderStatus="Pago"
						orderLink="Detalhes"
					/>
					<Order
						orderName="Mega Drone"
						orderNumber="11654655"
						orderPayment="Cartão de Crédito"
						orderStatus="Pago"
						orderLink="Detalhes"
					/>
					<Order
						orderName="Drone de Pouso"
						orderNumber="654655"
						orderPayment="Boleto Bancário"
						orderStatus="Aguardando Pagamento"
						orderLink="Detalhes"
					/>
				</tbody>
			</table>
			<a href="#">Amostrar Todas</a>
		</div>
	);
}
