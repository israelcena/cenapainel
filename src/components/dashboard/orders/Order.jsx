const Order = ({
	orderName,
	orderNumber,
	orderPayment,
	orderStatus,
	orderLink,
}) => {
	return (
		<tr>
			<td>{orderName}</td>
			<td>{orderNumber}</td>
			<td>{orderPayment}</td>
			<td className="text-yellow">{orderStatus}</td>
			<td className="text-primary">{orderLink}</td>
		</tr>
	);
};

export default Order;
