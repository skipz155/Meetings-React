import Todo from "./components/Todo";
import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavouritesPage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import './index.scss';

function App() {
	return (
		<div className="app-div">
			{/* <h1>My Todos</h1>
			<Todo text="Learn React" />
			<Todo text="Master React" />
			<Todo text="Explore the full React course" /> */}
			<MainNavigation />
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
		</div>
	);
}

export default App;
