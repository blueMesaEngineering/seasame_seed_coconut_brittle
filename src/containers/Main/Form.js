import React, { Component, PropTypes } from "react";

class Form extends Component {
  render() {
    return (
      <div className="container-fluid" id="contact">
        <div className="row">
          <h1
            className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-lg-offset-3 col-md-offset-3 "
            style={{ textAlign: "center" }}
          >
            Submit your dessert!
          </h1>
        </div>
        <div>
          <form
            className="col-lg-9 col-md-9 col-sm-12 col-xs-6 col-lg-offset-3 col-md-offset-3"
            style={{ textAlign: "center" }}
          >
            <div className="form-group">
              <label for="dessertName">Dessert Name</label>
              <input
                type="text"
                className="form-control "
                id="dessertName"
                placeholder="Chocolate chips cookies"
              />
            </div>
            <div className="form-group">
              <label for="dessertPicture">Dessert picture link</label>
              <input
                type="text"
                className="form-control"
                id="dessertPicture"
                placeholder="https://picture.com/my_picture"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
