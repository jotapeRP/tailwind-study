import React from "react";

const CarDetails = (props) => {
  return (
    <div className="car_details transform_50">
      <h1 className="model_name">{props.modelName}</h1>
      <h2 className="tag_line">
        Order Online for{" "}
        <span className="underline cursor-pointer">Touchless Delivery</span>
      </h2>
    </div>
  );
};

export default CarDetails;
