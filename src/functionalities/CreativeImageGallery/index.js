import "./style.scss";
import background from "./background.png";
import candy from "./Candy.png";
import cherry from "./Cherry.png";
import melon from "./Melon.png";

export default function index() {
  return (
    <div className="creativeImageGallery">
      <h1>Candy.</h1>
      <h1>Cherry.</h1>
      <h1>Melon.</h1>
      <div className="img-box"></div>
    </div>
  );
}
