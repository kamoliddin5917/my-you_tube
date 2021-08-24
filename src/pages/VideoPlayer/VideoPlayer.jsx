import "./VideoPlayer.scss";
import useArr from "../../hook/useArr";
import VideoList from "../../components/VideoList/VideoList";

const VideoPlayer = () => {
  const [arr] = useArr();

  return (
    <div className="video">
      <div className="video__main">
        <iframe
          className="video__main-origin"
          src="https://www.youtube.com/embed/e9t7M_V8F3E?start=120&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>

        <div className="video__main-about">
          <h2 className="video__main-about-title">
            Dude You Re Getting A Telescope
          </h2>
          <div className="video__main-about-bottom">
            <p className="view">123k views</p>
            <div className="buttons">
              <div className="button">123k</div>
              <div className="button">435k</div>
              <div className="button">Share</div>

              <div className="dots">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="video__main-bottom">
          <div className="video__main-bottom-text">
            <h2 className="title">Food & Drink</h2>
            <p className="data">Published on 14 Jun 2019</p>
            <p className="comment">
              A successful marketing plan relies heavily on the pulling-power of
              advertising copy. Writing result-oriented ad copy is difficult, as
              it must appeal to, entice, and convince consumers to take action.
              There is no magic formula to write perfect ad copy; it is based on
              a number of factors, including ad placement, demographic, even the
              consumer’s mood when they see your ad.{" "}
            </p>
            <p className="show">Show more</p>
          </div>

          <button className="video__main-btn">Subscribe 2.3m</button>
        </div>
      </div>
      <div className="video__slider">
        <div className="video__slider-top">
          <h1 className="title">Next</h1>
          <div className="autoplay">
            <span>Autoplay</span>
            <button
              className="autoplay__btn"
              onClick={(e) =>
                e.currentTarget.classList.toggle("autoplay__btn-active")
              }
            ></button>
          </div>
        </div>

        {arr && (
          <ul className="video__slider-ul">
            {arr
              .filter((user) => user.albumId === 50)
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
      </div>
    </div>
  );
};

export default VideoPlayer;
