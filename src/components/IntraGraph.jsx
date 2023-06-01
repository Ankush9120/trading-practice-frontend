import React, { useEffect, useRef } from "react";

const IntraGraph = () => {
  const grabintraGraph = useRef(null);
  useEffect(() => {
    if (grabintraGraph?.current) {
      grabintraGraph.current.scrollLeft = grabintraGraph.current.scrollWidth;
    }
  }, []);

  return (
    <div ref={grabintraGraph} className="intraGraphCover">
      <div className="intraGraph">
        <div className="bar highBar h-[10%]">
          <div className="fadeIn"></div>
        </div>
        <div className="bar lowBar h-[100%]">
          <div className="fadeIn"></div>
        </div>
        <div className="line">
          <div className="fadeIn"></div>
        </div>
        <div className="bar highBar h-[70%]">
          <div className="fadeIn"></div>
        </div>
        <div className="bar highBar h-[100%]">
          <div className="fadeIn"></div>
        </div>
        <div className="line">
          <div className="fadeIn"></div>
        </div>
        <div className="bar highBar h-[90%]">
          <div className="fadeIn"></div>
        </div>
        <div className="bar lowBar h-[70%]">
          <div className="fadeIn"></div>
        </div>
        <div className="bar highBar h-[70%]">
          <div className="fadeIn"></div>
        </div>
        <div className="bar highBar h-[100%]">
          <div className="fadeIn"></div>
        </div>
        <div className="line">
          <div className="fadeIn"></div>
        </div>
        <div className="bar highBar h-[90%]">
          <div className="fadeIn"></div>
        </div>
        <div className="bar lowBar h-[100%]">
          <div className="fadeIn"></div>
        </div>
      </div>
    </div>
  );
};

export default IntraGraph;
