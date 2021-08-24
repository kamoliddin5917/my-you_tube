import "./Channel.scss";
import { Link, useParams } from "react-router-dom";
import useArr from "../../hook/useArr";

// Components
import Sidebar from "../../components/Sidebar/Sidebar";
import { ArrowSvg } from "../../img/svg";
import VideoList from "../../components/VideoList/VideoList";

// Imgs
import channel_top from "../../img/channel-top.png";
import nora from "../../img/nora.png";
import flora from "../../img/flora.png";
import violet from "../../img/violet.png";
import phillip from "../../img/phillip.png";
import search_icon from "../../img/search-icon.png";
import channel_middle from "../../img/channel-middle.png";
import channel_top2x from "../../img/channel-top@2x.png";
import nora2x from "../../img/nora@2x.png";
import flora2x from "../../img/flora@2x.png";
import violet2x from "../../img/violet@2x.png";
import phillip2x from "../../img/phillip@2x.png";
import search_icon2x from "../../img/search-icon@2x.png";
import channel_middle2x from "../../img/channel-middle@2x.png";

const Channel = () => {
  const [arr] = useArr();
  const { userId } = useParams();

  return (
    <div className="channel">
      <Sidebar />

      <div className="channel__main">
        <img
          className="channel__main-top-img"
          src={channel_top}
          srcSet={`${channel_top} 1x, ${channel_top2x} 2x`}
          alt="channel-top"
        />
        <section className="channel__main-middle">
          <div className="channel__main-middle-top">
            <div className="channel__user">
              <img
                className="channel__user-img"
                src={nora}
                srcSet={`${nora} 1x, ${nora2x} 2x`}
                alt="nora"
              />
              <div className="channel__user-text">
                <h3 className="channel__user-name">Margaret Phelps</h3>
                <p className="channel__user-subscribed">245K subscribed</p>
              </div>
            </div>

            <button className="channel__btn">Subscribe 2.3m</button>
          </div>

          <div className="channel__main-middle-bottom">
            <div className="channel__main-middle-bottom-left">
              <ul className="channel-box">
                <li className="channel-box__list">home</li>
                <li className="channel-box__list">videos</li>
                <li className="channel-box__list">playlists</li>
                <li className="channel-box__list">channels</li>
                <li className="channel-box__list">discussion</li>
                <li className="channel-box__list">about</li>
                <li className="channel-box__list">
                  <img
                    className="channel-box__list-search"
                    src={search_icon}
                    srcSet={`${search_icon} 1x, ${search_icon2x} 2x`}
                    alt="search"
                  />
                </li>
              </ul>

              <Link className="channel-link" to="/video/7">
                <img
                  className="channel-link__img"
                  src={channel_middle}
                  srcSet={`${channel_middle} 1x, ${channel_middle2x} 2x`}
                  alt="channel_middle"
                />
                <span className="channel-link__text">
                  <span className="channel-link__text-title">
                    Choosing The Best Audio Player Software For Your Computer
                  </span>
                  <span className="channel-link__text-content">
                    Your cheap internet-based banner advertising will become one
                    of the sought for ads there are. Today, the world of
                    Internet advertising is rapidly evolving beyond banner ads
                    and intrusive pop-ups. Bayles A common medium for
                    advertising on the Internet is the use of banner ads.{" "}
                  </span>
                  <span className="channel-link__text-data">
                    11k views · 6 months ago
                  </span>
                </span>
              </Link>
            </div>

            <div className="channel__main-middle-bottom-right">
              <p className="channel-right__context">Recommended channel</p>
              <ul className="channel-right__ul">
                <li className="channel-right__list">
                  <img
                    className="user__img"
                    src={flora}
                    srcSet={`${flora} 1x, ${flora2x} 2x`}
                    alt="flora"
                  />
                  <h4 className="user__name">Flora Benson</h4>
                </li>
                <li className="channel-right__list">
                  <img
                    className="user__img"
                    src={violet}
                    srcSet={`${violet} 1x, ${violet2x} 2x`}
                    alt="violet"
                  />
                  <h4 className="user__name">Violet Cobb</h4>
                </li>
                <li className="channel-right__list">
                  <img
                    className="user__img"
                    src={phillip}
                    srcSet={`${phillip} 1x, ${phillip2x} 2x`}
                    alt="phillip"
                  />
                  <h4 className="user__name">Phillip Mullins</h4>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="channel__main-bottom">
          <div className="channel__main-bottom-top">
            <h3 className="channel-bottom__title">Margaret Phelps videos</h3>

            <div className="slider__btns">
              <button className="slider__btn prev">
                <ArrowSvg />
              </button>
              <button className="slider__btn next">
                <ArrowSvg />
              </button>
            </div>
          </div>

          {arr.length > 0 && (
            <ul className="channel__main-videos">
              {arr
                .filter((user) => user.albumId === Number(userId))
                .map((item) => (
                  <VideoList
                    key={item.id}
                    id={item.id}
                    img={item.url}
                    title={item.title}
                  />
                ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Channel;
