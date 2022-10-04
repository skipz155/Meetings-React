import { createContext, useState } from "react";

const FavouritesContext = createContext({
	favourites: [],
	totalFavourites: 0,

	addFavourite: (favouriteMeetup) => {},
	removeFavourite: (meetupId) => {},
	itemIsFavourite: (meetupId) => {},
}); //specjalnie z duzej

export function FavouritesContextProvider(props) {
	const [userFavourites, setUserFavourites] = useState([]);

	function addFavouriteHandler(favouriteMeetup) {
		//setUserFavourites(userFavourites.concat(favouriteMeetup)); // tak sie nie robi

		setUserFavourites((prevUserFavourites) => {
			return prevUserFavourites.concat(favouriteMeetup);
		});
	}
	function removeFavouriteHandler(meetupId) {
		setUserFavourites((prevUserFavourites) => {
			return prevUserFavourites.filter((meetup) => meetup.id !== meetupId);
		});
	}
	function itemIsFavouriteHandler(meetupId) {
		return userFavourites.some((meetup) => meetup.id === meetupId);
	}
	const context = {
		favourites: userFavourites,
		totalFavourites: userFavourites.length,
		addFavourite: addFavouriteHandler,
		removeFavourite: removeFavouriteHandler,
		itemIsFavourite: itemIsFavouriteHandler,
	};

	// czary i magia -> za każdym razem jak context ulegnie zmianie wszystko co jest w srodku providera bedzie reloadowane
	return (
		<FavouritesContext.Provider value={context}>
			{props.children}
		</FavouritesContext.Provider>
	);
}

export default FavouritesContext;
