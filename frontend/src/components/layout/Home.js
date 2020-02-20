import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col text-center">
            <div className="card border-primary mb-3 ml-3">
              <div className="card-header pt-5 pb-4">
                <h3>Quyudagi kodni o'ng tomondagi darchaga kiriting</h3>
              </div>
              <div className="card-body text-primary">
                {/* <h5 className="card-title">Primary card title</h5> */}
                <p className="card-text">
                  <code>
                    <br />
                    import turtle <br />
                    <br />
                    toshbaqa = turtle.Turtle()
                    <br />
                    toshbaqa.forward(100)
                    <br />
                    <br />
                    toshbaqa.color('red')
                    <br />
                    toshbaqa.left(90)
                    <br />
                    toshbaqa.forward(100)
                    <br />
                    <br />
                    toshbaqa.color('green')
                    <br />
                    toshbaqa.left(90)
                    <br />
                    toshbaqa.forward(100)
                    <br />
                    <br />
                    toshbaqa.color('yellow')
                    <br />
                    toshbaqa.left(90)
                    <br />
                    toshbaqa.forward(100)
                    <br />
                    <br />
                    turtle.done()
                    <br />
                    <br />
                  </code>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="text-center">
              <iframe
                src="https://python-ide-online.s3-website-us-east-1.amazonaws.com"
                width="95%"
                height="600"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="ml-3">
              Darsni boshlamoqchi bulsangiz{" "}
              <span>
                <Link to="/lesson1"> shuni bosing</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
