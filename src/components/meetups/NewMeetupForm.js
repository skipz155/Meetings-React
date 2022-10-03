import Card from "../wrappers/Card";
import "./NewMeetupForm.scss";

function NewMeetupForm() {
	return (
		<Card>
			<form className="new-meetup-form">
				<div className="nmf-container">
					<label htmlFor="title">Meetup Title</label>
					<input type="text" required id="title"></input>
				</div>
				<div className="nmf-container">
					<label htmlFor="description">Meetup Description</label>
					<textarea rows="5" required id="description"></textarea>
				</div>
				<div className="nmf-container">
					<label htmlFor="image">Meetup Image</label>
					<input type="url" id="image"></input>
				</div>
				<div className="nmf-container">
					<label htmlFor="address">Address</label>
					<input type="text" required id="address"></input>
				</div>
				<div className="nmf-btn-container">
					<button className="button-form">Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
