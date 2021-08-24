import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import useArr from "../../hook/useArr";

// Components
import {
  HomeSvg,
  FireSvg,
  SubscriptionsSvg,
  LibrarySvg,
  HistorySvg,
  WatchSvg,
  FavouriteSvg,
  LikeSvg,
  MusicSvg,
  GamesSvg,
  ShowSvg,
  SettingSvg,
} from "../../img/svg";

/*// Imgs
import gussie from "../../img/gussie.png";
import nora from "../../img/nora.png";
import belle from "../../img/belle.png";
import eunike from "../../img/eunike.png";
import emma from "../../img/emma.png";
import leah from "../../img/leah.png";*/

const Sidebar = () => {
  const [arr] = useArr();

  return (
    <div className="sidebar">
      <ul className="sidebar__ul">
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/"
            exact
          >
            <HomeSvg />
            <span>Home</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/trending"
          >
            <FireSvg />
            <span>Trending</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/subscription"
          >
            <SubscriptionsSvg />
            <span>Subscriptions</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/library"
          >
            <LibrarySvg />
            <span>Library</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/history"
          >
            <HistorySvg />
            <span>History</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/watch-late"
          >
            <WatchSvg />
            <span>Watch late</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/favourite"
          >
            <FavouriteSvg />
            <span>Favourites</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/liked-videos"
          >
            <LikeSvg />
            <span>Liked videos</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/music"
          >
            <MusicSvg />
            <span>Music</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/games"
          >
            <GamesSvg />
            <span>Games</span>
          </NavLink>
        </li>
        <li className="sidebar__list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/show-more"
          >
            <ShowSvg />
            <span>Show more</span>
          </NavLink>
        </li>
      </ul>

      <h3 className="sidebar__title">Subscriptions</h3>

      <ul className="sidebar__channel">
        {arr.length > 0 &&
          arr.map((user, i) =>
            i < 50 ? (
              <li className="sidebar__channel-list" key={i}>
                <NavLink
                  className="sidebar__link"
                  activeClassName="sidebar__link-active"
                  to={`/channel/${i + 1}`}
                >
                  <img
                    className="sidebar__channel-img"
                    src={user.url}
                    alt="gussie"
                  />
                  <span className="sidebar__channel-name">{user.title}</span>
                </NavLink>
              </li>
            ) : (
              ""
            )
          )}
        {/*if (i < 50) {
            //   return (
                <li className="sidebar__channel-list" key={i}>
                  <NavLink
                    className="sidebar__link"
                    activeClassName="sidebar__link-active"
                    to={`/channel/${i + 1}`}
                  >
                    <img
                      className="sidebar__channel-img"
                      src={user.url}
                      alt="gussie"
                    />
                    <span className="sidebar__channel-name">{user.title}</span>
                  </NavLink>
                </li>
            //   );
             }*/}

        {/* <li className="sidebar__channel-list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/channel"
          >
            <img className="sidebar__channel-img" src={gussie} alt="gussie" />
            <span className="sidebar__channel-name">Gussie Singleton</span>
          </NavLink>
        </li>
        <li className="sidebar__channel-list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/channel"
          >
            <img className="sidebar__channel-img" src={nora} alt="gussie" />
            <span className="sidebar__channel-name">Nora Francis</span>{" "}
          </NavLink>
        </li>
        <li className="sidebar__channel-list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/channel"
          >
            <img className="sidebar__channel-img" src={belle} alt="gussie" />
            <span className="sidebar__channel-name">Belle Briggs</span>{" "}
          </NavLink>
        </li>
        <li className="sidebar__channel-list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/channel"
          >
            <img className="sidebar__channel-img" src={eunike} alt="gussie" />
            <span className="sidebar__channel-name">Eunice Cortez</span>{" "}
          </NavLink>
        </li>
        <li className="sidebar__channel-list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/channel"
          >
            <img className="sidebar__channel-img" src={emma} alt="gussie" />
            <span className="sidebar__channel-name">Emma Hanson</span>{" "}
          </NavLink>
        </li>
        <li className="sidebar__channel-list">
          <NavLink
            className="sidebar__link"
            activeClassName="sidebar__link-active"
            to="/channel"
          >
            <img className="sidebar__channel-img" src={leah} alt="gussie" />
            <span className="sidebar__channel-name">Leah Berry</span>{" "}
          </NavLink>
        </li> */}
      </ul>

      <NavLink
        className="sidebar__link"
        activeClassName="sidebar__link-active"
        to="/setting"
      >
        <SettingSvg />
        <span>Setting</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
