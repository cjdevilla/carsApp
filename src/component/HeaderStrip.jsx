import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const HeaderStrip = () => {
  return (
    // Header Strip
    <div>
      <div className="w-[1440px] h-full p-1 flex items-center bg-teal-500">
        <div className="cursor-pointer">
          <svg
            className="w-[25px]"
            width="32"
            height="31"
            viewBox="0 0 32 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.728 8.35163H24.8927V15.5163H17.728V8.35163Z"
              fill="white"
            />
            <path
              d="M17.728 17.2952H24.8927V24.463H17.728V17.2952Z"
              fill="white"
            />
            <path
              d="M7.99219 17.2952H15.1569V24.463H7.99219V17.2952Z"
              fill="white"
            />
            <path
              d="M6.02246 15.3005H15.1541V6.16892H6.02246V15.3005ZM7.45602 7.60248H13.7205V13.8639H7.45602V7.60248Z"
              fill="white"
            />
            <path
              d="M27.9757 0H4.01832C2.29497 0 0.88916 1.40581 0.88916 3.12608V26.991C0.88916 28.7143 2.29189 30.117 4.01832 30.117H27.9757C29.699 30.117 31.1018 28.7112 31.1018 26.991V3.12608C31.1018 1.40581 29.696 0 27.9757 0ZM29.2181 26.994C29.2181 27.6815 28.6601 28.2334 27.9757 28.2334H4.01832C3.33392 28.2334 2.77282 27.6785 2.77282 26.994V3.12608C2.77282 2.44167 3.33083 1.88675 4.01832 1.88675H27.9757C28.6601 1.88675 29.2181 2.44167 29.2181 3.12608V26.994Z"
              fill="white"
            />
          </svg>
        </div>
        {/* Line */}
        <div className="ml-5 mr-5">
          <svg
            width="1"
            height="30"
            viewBox="0 0 1 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="2.18556e-08"
              x2="0.499999"
              y2="30"
              stroke="white"
            />
          </svg>
        </div>

        {/* Menu Large Device */}
        <div>
          <ul className="relative items-center uppercase justify-center space-x-7 text-white">
            <Link to="/">Cars</Link>
            <Link to="/">Parts</Link>
            <Link to="/">Workshops</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderStrip;
