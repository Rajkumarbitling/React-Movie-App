import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";
import naruto from "../../images/naruto.png";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="action">Action</option>
            <option value="crime">Crime</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
      )}
      <img
        width="100%"
        src="https://wallpapercave.com/wp/wp2670843.jpg"
        alt=""
      />
      <div className="info">
        <img src={naruto} alt="" />
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          eaque praesentium, nam quis hic aliquam ipsum, amet ut dolorem sed
          optio expedita velit, distinctio iusto minima. Doloribus maiores
          facilis molestias!
        </div>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
