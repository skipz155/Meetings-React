import { useContext } from "react";
import { Link } from "react-router-dom";
import FavouritesContext from "../../store/favourites-context";
import "./MainNavigation.scss";

function MainNavigation() {
	const favouriteCtx = useContext(FavouritesContext);

	return (
		<header>
			<div className="nav-container">
				<p className="nav-p">React Meetups</p>
				<nav>
					<ul className="nav-ul">
						<li>
							<Link className="nav-link" to="/">
								AllMeetups
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/new-meetup">
								NewMeetup
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/fav">
								Favourites<span className="badge">{favouriteCtx.totalFavourites}</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default MainNavigation;
