import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import "./index.scss";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<Layout className="app-div">
			<Switch>
				<Route path="/" exact>
					<AllMeetupsPage></AllMeetupsPage>
				</Route>
				<Route path="/new-meetup">
					<NewMeetupPage></NewMeetupPage>
				</Route>
				<Route path="/fav">
					<FavouritesPage></FavouritesPage>
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
