import { useState, useEffect } from "react"; //useeffect to Hook ktory pozwala na odpalanie kodu jezeli spelnione sa jakies warunki
import MeetupList from "../components/meetups/MeetupList";
import "../index.scss";

// const DUMMY_DATA = [
// 	{
// 		id: "m1",
// 		title: "first one",
// 		image:
// 			"https://images.unsplash.com/photo-1664206626597-2c158e274a96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
// 		address: "MeetupStreet 5, 15025 City",
// 		description:
// 			"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
// 	},
// 	{
// 		id: "m2",
// 		title: "second one",
// 		image:
// 			"https://images.unsplash.com/photo-1664539847491-49d4858f5921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
// 		address: "MeetupStreet 5, 15025 City",
// 		description:
// 			"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ",
// 	},
// ];

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true); //usestate do ładowania -> domyslnie true
	const [loadedMeetups, setLoadedMeetups] = useState([]); // nasze załadowane meetupy z bazy beda tutej

	//useeffect zapobiega petli wykonywania fetcha w kolko
	useEffect(() => {
		setIsLoading(true);
		fetch(
			"https://meetings-react-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
		)
			.then((response) => {
				return response.json(); //nie zapominac o return
			})
			.then((data) => {
				//Teraz potrzebujemy wydobyc nasze dane z firebase, zeby to zrobic \/
				const meetups = [];
				for (const key in data) {
					const meetup = {
						id: key, //key to IDki z firebase - te dziwne ciagi liczb
						...data[key], // ... spread operator zeby wydobyc dane z obiektow o danych kluczach
					};

					meetups.push(meetup); //wrzucamy meetupy do naszego arraya
				}

				setIsLoading(false); //zmieniamy ladowanie na false bo się skonczylo ladowac i mamy dane
				console.log(meetups);
				setLoadedMeetups(meetups);
			});
	}, []); //jak zostawimy puste (drugi argument) to react odpali nam fetcha tylko raz kiedy komponent sie odpali za pierwszym razem jak odswiezymy strone (nie ma ryzyka petli)
	// gdybysmy wrzucili tu np isLoading to fetch by sie wykonywal za kazdym razem kiedy isloading zmienilo by wartosc (np z true na false)
	// !!!WAŻNE -> jeżeli uzywalibysmy propsa (czyli wartości internal) to powinnismy go wrzucic do drugiego argumentu, ale my uzywamy externala wiec zostawiamy puste

	//fetch zwraca Promise! -> dlatego mozemy wykorzystywać then
	//getujemy sobie dane do meetupow z firebasa

	// nasze okienko ładowania "tymczasowe"
	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	// teraz magia --> nie możemy uzyc async/await bo react komponenty musza byc synchroniczne wiec musimy uzyc czegos co bedzie symulowalo ladowanie strony do momentu wczytania się naszych danych z bazy
	// rozwiazanko to uzycie state /\ usestate from react

	//I zamiana DUMMY_DATA na loadedMeetups z bazy -> Dummy narazie zostaje na pamiątke
	return (
		<div>
			<h1>All Meetups Page!</h1>
			<ul className="all-meetups-ul">
				<MeetupList meetups={loadedMeetups}></MeetupList>
			</ul>
		</div>
	);
}

export default AllMeetupsPage;
