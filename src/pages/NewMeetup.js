import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
	const history = useHistory();
	//funkcja do http requesta --> przekazujemy dane z NewMeetupForma
	function addMeetupHandler(meetupData) {
		//tutaj http request // fetch defaultowo to GET request
		fetch(
			"https://meetings-react-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
			{
				method: "POST",
				body: JSON.stringify(meetupData),
				headers: {
					"Content-Type": "application/json",
				},
			} //standardowy js -> axios /// reference url z firebase + meetups.json
		).then(() => {
			history.replace("/");
		}); //then -> wykorzystujemy react routera a konkretniej historii żeby cofnąć się do konkretnej strony "/<target>"
	}

	return (
		<div>
			<h1>New Meetup Page!</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</div>
	);
}

export default NewMeetupPage;
