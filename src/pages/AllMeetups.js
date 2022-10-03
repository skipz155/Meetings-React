import MeetupList from "../components/meetups/MeetupList";
import '../index.scss'

const DUMMY_DATA = [
	{
		id: "m1",
		title: "first one",
		image:
			"https://images.unsplash.com/photo-1664206626597-2c158e274a96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
		address: "MeetupStreet 5, 15025 City",
		description:
			"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ",
	},
	{
		id: "m2",
		title: "second one",
		image:
			"https://images.unsplash.com/photo-1664539847491-49d4858f5921?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
		address: "MeetupStreet 5, 15025 City",
		description:
			"Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ",
	},
];

function AllMeetupsPage() {
	return (
		<div>
			<h1>All Meetups Page!</h1>
			<ul className="all-meetups-ul">
				<MeetupList meetups={DUMMY_DATA}></MeetupList>
			</ul>
		</div>
	);
}

export default AllMeetupsPage;
