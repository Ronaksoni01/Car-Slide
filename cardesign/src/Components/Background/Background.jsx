import "./Background.css";
import video1 from "../../assets/video1.mp4";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={photo1} className="background fade-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={photo2} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={photo3} className="background fade-in" alt="" />;
  }
};

export default Background;
