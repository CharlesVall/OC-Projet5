import { useState } from "react";
import "./LogementCarousel.scss"
import leftArrow from "@/assets/left-arrow.svg"
import rightArrow from "@/assets/right-arrow.svg"

export default function LogementCarousel({ pictureList }) {
  const [carouselPosition, setCarouselPosition] = useState(0);

  function retreatCarouselCursor() {
    setCarouselPosition(
      (carouselPosition - 1 + pictureList.length) % pictureList.length
    );
  }

  function advanceCarouselCursor() {
    setCarouselPosition((carouselPosition + 1) % pictureList.length);
  }

  return (
    <div className="logement__carousel">
      <button onClick={retreatCarouselCursor}><img src={leftArrow}></img></button>
      <img className="carousel__img" src={ pictureList[carouselPosition] }></img>
      <button onClick={advanceCarouselCursor}><img src={rightArrow}></img></button>
    </div>
  )
}
