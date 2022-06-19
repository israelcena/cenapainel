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
					<tr>
						<td>Mini Drone</td>
						<td>123456789</td>
						<td>Cartão de Crédito</td>
						<td className="text-yellow">Pago</td>
						<td className="text-primary">Detalhes</td>
					</tr>
					<tr>
						<td>Mini Drone</td>
						<td>123456789</td>
						<td>Cartão de Crédito</td>
						<td className="text-yellow">Pago</td>
						<td className="text-primary">Detalhes</td>
					</tr>
					<tr>
						<td>Mini Drone</td>
						<td>123456789</td>
						<td>Cartão de Crédito</td>
						<td className="text-yellow">Pago</td>
						<td className="text-primary">Detalhes</td>
					</tr>
					<tr>
						<td>Mini Drone</td>
						<td>123456789</td>
						<td>Cartão de Crédito</td>
						<td className="text-yellow">Pago</td>
						<td className="text-primary">Detalhes</td>
					</tr>
					<tr>
						<td>Mini Drone</td>
						<td>123456789</td>
						<td>Cartão de Crédito</td>
						<td className="text-yellow">Pago</td>
						<td className="text-primary">Detalhes</td>
					</tr>
					<tr>
						<td>Mini Drone</td>
						<td>123456789</td>
						<td>Cartão de Crédito</td>
						<td className="text-yellow">Pago</td>
						<td className="text-primary">Detalhes</td>
					</tr>
				</tbody>
			</table>
			<a href="#">Amostrar Todas</a>
		</div>
	);
}
