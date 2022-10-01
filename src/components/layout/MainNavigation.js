import { Link } from "react-router-dom";
import "./MainNavigation.scss";

function MainNavigation() {
  return (
    <header>
      <div className="nav-container">
        <p className="nav-p">React Meetups</p>
        <nav>
          <ul className="nav-ul">
            <li>
              <Link className="nav-link" to="/">AllMeetups</Link>
            </li>
            <li>
              <Link className="nav-link" to="/new-meetup">NewMeetup</Link>
            </li>
            <li>
              <Link className="nav-link" to="/fav">Favourites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MainNavigation;
