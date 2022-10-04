import { useContext } from "react";
import FavouritesContext from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

//context jest tymczasowy, żeby banglalo na stale trzeba wrzucic to na serwer albo przechowywac lokalnie
function FavouritesPage() {
	const favouriteCtx = useContext(FavouritesContext);

	let content;

	if (favouriteCtx.totalFavourites === 0) {
		content = <p>You got no favourites yet :(</p>;
	} else {
		content = <MeetupList meetups={favouriteCtx.favourites}></MeetupList>;
	}

	return (
		<section>
			<h1>My Favourites!</h1>
			{content}
		</section>
	);
}

export default FavouritesPage;
