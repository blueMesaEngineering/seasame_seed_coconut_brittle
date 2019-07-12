import React, { Component, PropTypes } from "react";
import "./Desserts.css";

class Desserts extends Component {
  render() {
    return (
      <div className="container-fluid" id="desserts">
        <div className="row desserts">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img src={require("../../assets/brownies.png")} alt="Brownies" />
              <p className="caption">Mini Brownies</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img
                src={require("../../assets/chocolate-cake.png")}
                alt="Chocolate cake"
              />
              <p className="caption">Chocolate Cake</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img
                src={require("../../assets/coco-truffles.png")}
                alt="Coconut truffles"
              />
              <p className="caption">Coconut truffles</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img
                src={require("../../assets/lemon-pie-shots.png")}
                alt="Lemon Pie Shots"
              />
              <p className="caption">Lemon Pie Shots</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img
                src={require("../../assets/macaroons.png")}
                alt="Macaroons"
              />
              <p className="caption">Macaroons</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="thumbnail">
              <img
                src={require("../../assets/red-velvet-cupcakes.png")}
                alt="Red Velvet Cupcakes"
              />
              <p className="caption">Red Velvet Cupcakes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Desserts;
