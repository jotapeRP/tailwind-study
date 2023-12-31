import React from "react";

//components
import CarDetails from "./CarDetails";
import CarButtons from "./CarButtons";

const CarSection = (props) => {
  return (
    <div id={props.modelId} className="car_section">
      <img src={props.modelImg} alt={props.modelName} className="car_img" />
      <CarDetails modelName={props.modelName} />
      <CarButtons />
      <a href={props.modelNext}>
        <svg
          className="down_svg"
          viewBox="0 0 30 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="var(--tds-icon--fill, #171a20)"
            strokeWidth="1.5"
            d="m19.5 12.5-4.5 4-4.5-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
};

export default CarSection;
