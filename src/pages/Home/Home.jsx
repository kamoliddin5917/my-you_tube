import "./Home.scss";
import { Link } from "react-router-dom";

// Components
import Sidebar from "../../components/Sidebar/Sidebar";
import { ArrowSvg } from "../../img/svg";
import VideoList from "../../components/VideoList/VideoList";
import useArr from "../../hook/useArr";

// Imgs
import gussie from "../../img/gussie.png";
import gussie2x from "../../img/gussie@2x.png";
import food from "../../img/food.png";
import food2x from "../../img/food@2x.png";

const Home = () => {
  const [arr] = useArr();

  return (
    <div className="home">
      <Sidebar />

      <div className="home__main">
        <section className="home__main-card">
          <div className="home__main-card-top">
            <Link className="home__main-card-top-user" to="/channel/1">
              <img
                className="user__img"
                src={gussie}
                srcSet={`${gussie} 1x, ${gussie2x} 2x`}
                alt="gussie"
              />
              <p className="user__name">Dollie Blair</p>
            </Link>

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
            <ul className="videos-ul videos-ul--one">
              {arr
                .filter((item) => item.albumId === 1)
                .map((user, i) => (
                  <VideoList
                    key={i}
                    id={user.id}
                    img={user.url}
                    title={user.title}
                  />
                ))}
            </ul>
          )}
        </section>

        <section className="home__main-card">
          <div className="home__main-card-top">
            <div className="home__main-card-top-user">
              <p className="user__name">Recommended</p>
            </div>

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
            <ul className="videos-ul videos-ul--two">
              {arr
                .filter((item) => item.albumId === 2)
                .map((user, i) => (
                  <VideoList
                    key={i}
                    id={user.id}
                    img={user.url}
                    title={user.title}
                  />
                ))}
            </ul>
          )}
        </section>

        <section className="home__main-card">
          <div className="home__main-card-top">
            <Link className="home__main-card-top-user" to="/channel/1">
              <img
                className="user__img"
                src={food}
                srcSet={`${food} 1x, ${food2x} 2x`}
                alt="food"
              />
              <p className="user__name">Food & Drink</p>
              <p className="user__channel">Recommended channel for you</p>
            </Link>

            <button className="home__main-card-top-btn">Subscribe 2.3m </button>

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
            <ul className="videos-ul videos-ul--three">
              {arr
                .filter((item) => item.albumId === 3)
                .map((user, i) => (
                  <VideoList
                    key={i}
                    id={user.id}
                    img={user.url}
                    title={user.title}
                  />
                ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
};

export default Home;
