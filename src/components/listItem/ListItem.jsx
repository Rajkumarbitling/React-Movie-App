import "./listItem.scss";
import { useState } from "react";
import spider from "../../images/spider.jpg";
import spiderTrailer from "../../images/spider-trailer.mov";
import {
  Add,
  PlayArrow,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from "@material-ui/icons";

const ListItem = ({ index }) => {
  const [isHovered, setisHovered] = useState(false);
  const videoLink = spiderTrailer;
  return (
    <div
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      className="listItem"
      onMouseEnter={() => {
        setisHovered(true);
      }}
      onMouseLeave={() => {
        setisHovered(false);
      }}
    >
      <img src={spider} alt="" />
      {isHovered && (
        <>
          <video src={videoLink} autoplay={true} loop={true}></video>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="limit">+13 age</span>
              <span>1996</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              distinctio voluptatum, veritatis facilis inventore nobis quibusdam
              quae porro atque repudiandae reiciendis aperiam, culpa iste
              provident. Eum doloremque nisi reprehenderit placeat.
            </div>
            <div className="genre">
              <span>Action</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
