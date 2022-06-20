import Update from "./updateComponent/Update";

import "./recentUpdatesStyles.css";

export default function RecentUpdates() {
	return (
		<div className="recent-updates">
			<h2>Atualizações</h2>
			<div className="updates">
				<Update
					userName="Mike Tyson"
					updateTime="2 minutos atrás"
					userImage="https://images.unsplash.com/photo-1655158487509-ef5330a2b4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					updateText="Ordem recebida de John Doe para Rua dos Bobos"
				/>
				<Update
					userName="Linda Anderson"
					updateTime="5 minutos atrás"
					userImage="https://images.unsplash.com/photo-1654907300621-78c0edc0570a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					updateText="Transferência de R$ 100,00 recebida de John Doe"
				/>
				<Update
					userName="John Doe"
					updateTime="10 minutos atrás"
					userImage="https://images.unsplash.com/photo-1622184058078-8763485b39a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					updateText="Ordem recebida de Linda Anderson para Rua dos Bobos"
				/>
				<Update
					userName="Williamson Silva"
					updateTime="15 minutos atrás"
					userImage="https://images.unsplash.com/photo-1654491016608-31910365874e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					updateText="Recebido R$ 100,00 de John Doe"
				/>
				<Update
					userName="Will Smith"
					updateTime="20 minutos atrás"
					userImage="https://images.unsplash.com/photo-1654644575078-2f1f447d7ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					updateText="Recebido de transação de R$ 100,00 de John Doe"
				/>
			</div>
		</div>
	);
}
