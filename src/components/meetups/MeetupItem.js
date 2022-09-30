import { useState } from "react";
import "./MeetupItem.module.scss";

import classes from "./MeetupItem.module.scss";
import Card from "../wrappers/Card";
import Modal from "../Modal";
import Backdrop from "../Backdrop";

function MeetupItem(props) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);

	function toFavouriteHandler() {
		setModalIsOpen(true);
	}

	function deleteHandler() {
		setDeleteModalIsOpen(true); // TUTAJ PRZEKAZAC ID TEGO DO USUNIECIA
	}

	function deleteMeeting() {
		console.log("DELETED");
		closeModalHandler();
	}

	function closeModalHandler() {
		setModalIsOpen(false);
		setDeleteModalIsOpen(false);
	}

	return (
		<Card>
			<li className={classes.item}>
				<div>
					<img className={classes.image} src={props.image} alt={props.title} />
				</div>
				<h2 className={classes.title}>{props.title}</h2>
				<p className={classes.description}>{props.description}</p>
				<div>
					<button className={classes.button} onClick={toFavouriteHandler}>
						Add to favourites
					</button>
					<button className={classes.delButton} onClick={deleteHandler}>
						Delete
					</button>
				</div>
			</li>
			{modalIsOpen && (
				<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} /> //TU W ON CONFIRM CO MA TO ROBIĆ
			)}
			{modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

			{deleteModalIsOpen && (
				<Modal onCancel={closeModalHandler} onConfirm={deleteMeeting} /> //TU W ON CONFIRM CO MA TO ROBIĆ
			)}
			{deleteModalIsOpen && <Backdrop onCancel={closeModalHandler} />}
		</Card>
	);
}
export default MeetupItem;
