import React from "react";
import Nav from "../components/nav.jsx";
import "./home.css"; // Import the CSS file

const Home = () => {
  return (
    <div>
      <div className="page__header">
        Home
      </div>
      <body>
        <div className="top_picture--wrapper">
          <figure className="picture-1">
            <img
              className="figure-1-img"
              src="https://happyincorgin.files.wordpress.com/2022/07/bbbaa-1-3.png?w=1024&h=576"
              alt=""
            />
          </figure>
        </div>
        <div className="middle_picture--wrapper">
          <figure className="picture-2">
            <img
              className="figure-2-img"
              src="https://dalstondemo.files.wordpress.com/2019/09/pale-unsubscribed.png"
              alt=""
            />
          </figure>
          <figure className="picture-3">
            <img
              className="figure-3-img"
              src="https://dalstondemo.files.wordpress.com/2019/09/no-connection-5.png"
              alt=""
            />
          </figure>
        </div>
        <div className="bottom_picture--wrapper">
          <figure className="picture-4">
            <img src="" alt="" className="figure-4-img" />
          </figure>
        </div>
      </body>
    </div>
  );
};

export default Home;
