import "./Layout.scss";
import MainNavigation from "./MainNavigation";

function Layout(props) {
	return (
		<div className="layout">
			<MainNavigation />
			<main className="main-layout">{props.children}</main>
		</div>
	);
}

export default Layout;
