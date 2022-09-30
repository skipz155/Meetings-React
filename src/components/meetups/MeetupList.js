import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.scss";

function MeetupList(props) {
	return (
		<ul className={classes.list}>
			{props.meetups.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					image={meetup.image}
					title={meetup.title}
					description={meetup.description}
					// można też meetup={meetup} i doda wszystko
				/>
			))}
		</ul>
	);
}

export default MeetupList;
