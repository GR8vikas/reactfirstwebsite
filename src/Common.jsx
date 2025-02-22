import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/assets/download.svg";

const Common = (props) => {
  return (
    <>
      <section className="  align-items-center" id="header">
        <div className="containar-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Technical vikas</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making website
                  </h2>
                  <div className="my-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    alt="home "
                    className="img-fliud animeted"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
