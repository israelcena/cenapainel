import "./profileStyles.css";

export default function Profile({ userName, userProfile }) {
	return (
		<div className="profile">
			<div className="profile-info">
				<p>
					Hey, <b>{userName}</b>
				</p>
				<small className="text-muted">{userProfile}</small>
			</div>
			<div className="profile-image">
				<img
					src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					alt="Profile"
				/>
			</div>
		</div>
	);
}
