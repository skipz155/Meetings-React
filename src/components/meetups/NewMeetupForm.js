import { useRef } from "react";

import Card from "../wrappers/Card";
import "./NewMeetupForm.scss";

function NewMeetupForm(props) {
	const titleInputRef = useRef(); //tworzy reference object --> dodajemy kolejnego specjal propa do inputa "ref"
	const descInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault(); //prewencja przeciwko defaultowemu odswiezaniu strony po wykonaniu operacji

		const enteredTitle = titleInputRef.current.value;
		const enteredDesc = descInputRef.current.value;
		const enteredImg = imageInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;

		const meetupData = {
			title: enteredTitle,
			description: enteredDesc,
			image: enteredImg,
			address: enteredAddress,
		};

		console.log(meetupData);
		props.onAddMeetup(meetupData); //wykorzystujemy propsy zeby przeniesc http requesta do NewMeetup.js
	}
	return (
		<Card>
			<form className="new-meetup-form" onSubmit={submitHandler}>
				<div className="nmf-container">
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title" ref={titleInputRef}></input>
				</div>
				<div className="nmf-container">
					<label htmlFor="description">Meetup Description</label>
					<textarea
						rows="5"
						required
						id="description"
						ref={descInputRef}
					></textarea>
				</div>
				<div className="nmf-container">
					<label htmlFor="image">Meetup Image</label>
					<input type="url" id="image" ref={imageInputRef}></input>
				</div>
				<div className="nmf-container">
					<label htmlFor="address">Address</label>
					<input
						type="text"
						required
						id="address"
						ref={addressInputRef}
					></input>
				</div>
				<div className="nmf-btn-container">
					<button className="button-form">Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
