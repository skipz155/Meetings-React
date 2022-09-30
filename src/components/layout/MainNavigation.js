import { Link } from "react-router-dom";

function MainNavigation() {
	return (
		<header>
			<div>
				React Meetups
				<nav>
					<ul>
						<li>
							<Link to="/">AllMeetups</Link>
						</li>
                        <li>
							<Link to="/new-meetup">NewMeetup</Link>
						</li>
                        <li>
							<Link to="/fav">Favourites</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default MainNavigation;
