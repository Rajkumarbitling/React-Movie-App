import "./watch.scss";
import { ArrowBack } from "@material-ui/icons";
import spiderTrailer from "../../images/spider-trailer.mov";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBack />
        Home
      </div>
      <video
        src={spiderTrailer}
        className="video"
        autoplay
        controls
        progress
      ></video>
    </div>
  );
};

export default Watch;
