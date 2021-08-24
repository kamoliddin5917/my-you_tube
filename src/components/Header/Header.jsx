import "./Header.scss";
import { Link } from "react-router-dom";

// Imgs
import logo from "../../img/logo.png";
import profile_img from "../../img/profil-img.png";
import logo2x from "../../img/logo@2x.png";
import profile_img2x from "../../img/profil-img@2x.png";

// Components
import { VideoSvg, DotsSvg, RingSvg } from "../../img/svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="hamburger">
          <span className="hamburger__span"></span>
          <span className="hamburger__span"></span>
          <span className="hamburger__span"></span>
        </div>

        <Link className="logo" to="/">
          <img
            className="logo__img"
            src={logo}
            srcSet={`${logo} 1x, ${logo2x} 2x`}
            alt="logo"
          />
        </Link>

        <input
          className="header__left-search"
          type="text"
          placeholder="search"
        />
      </div>

      <div className="header__right">
        <div className="header__right-img">
          <VideoSvg />
        </div>
        <div className="header__right-img">
          <DotsSvg />
        </div>
        <div className="header__right-img">
          <RingSvg />
        </div>
        <img
          className="header__right-profile-img"
          src={profile_img}
          srcSet={`${profile_img} 1x, ${profile_img2x} 2x`}
          alt="profile"
        />
      </div>
    </header>
  );
};

export default Header;
