import "./Hero.css";

// import left from "../../assets/left.png";
import play from "../../assets/play.png";
import right from "../../assets/right.png";
import pause from "../../assets/pause.png";
const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the feature.</p>
        <img src={right} alt="" height={40}/>
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
        </ul>
        <div className="hero-play">
        <img onClick={()=> setPlayStatus(!playStatus)} src={playStatus?pause:play} alt="" height={70} />
        <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
