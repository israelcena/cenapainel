import "./updateStyles.css";

export default function Update({
	userName,
	userImage,
	updateText,
	updateTime,
}) {
	return (
		<div className="update">
			<div className="profile-photo">
				<img src={userImage} alt={`Profile ${userName}`} />
			</div>
			<div className="update-info">
				<p>
					<b>{userName}</b>
					{updateText}
				</p>
				<small className="text-muted">{updateTime}</small>
			</div>
		</div>
	);
}
