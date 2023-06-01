import React from "react";

const Pulse = (props) => {
  return (
    <div className="heart-rate">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 150 73"
        enableBackground="new 0 0 150 73"
        xmlSpace="preserve"
        className={props.pnlStroke}
      >
        {/* <polyline
          fill="none"
          stroke={props.stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          points="0,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,45.486 150,45.486"
        /> */}

        <polyline
          fill="none"
          stroke={props.stroke}
          strokeWidth="3"
          strokeMiterlimit="10"
          points="0,45.486 57.771,45.486 62.838,55.622 71.959,9 80.067,63.729 84.122,45.486 97.297,45.486 103.379,45.486 150,45.486"
        />
      </svg>
      <div className="fade-in"></div>
    </div>
  );
};

export default Pulse;
