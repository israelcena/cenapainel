// components
import MenuButtons from "./menuButtons/MenuButtons";
import Profile from "./profile/Profile";
import RecentUpdates from "./recentUpdates/RecentUpdates";

// styles
import "./rightStyles.css";

export default function Right() {
	return (
		<div className="right">
			<div className="top">
				<MenuButtons />
				<Profile />
			</div>
			<RecentUpdates />
		</div>
	);
}
