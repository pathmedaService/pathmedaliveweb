import React, { Component } from "react";
import Farmer from "./img/IndiaFarming.jpg";
import { Button } from "react-bootstrap";
import "./css/main.css";
import "./css/style.css";
import "./css/userTable.css";
class homepage extends Component {
  state = { username: "", email: "", subject: "", message: "" };

  msgSenderHandler = () => {
    if (
      this.state.username === "" ||
      !this.state.email.match(
        "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$"
      ) ||
      this.state.subject.length <= 5 ||
      this.state.message.length <= 20
    ) {
      alert(
        "Please Follow Format: 1.Username should not be empty. 2.Enter valid email(Example:xyz@gmail.com). 3.Subject should be meaningful. 4.Message should be descriptive."
      );
    } else {
      window.Email.send({
        SecureToken: "883cd1fc-fae5-4d4f-b89c-5acad0c73674",
        To: `pathmedaservices@gmail.com`,
        From: `pathmedaservices@gmail.com`,
        Subject: `${this.state.username}:- My connect email is ${this.state.email}. ${this.state.subject}`,
        Body: `${this.state.message}`,
      })
        .then((message) =>
          message === "OK"
            ? (alert("Message sent!Thank you.We will get back to you."),
              this.setState({
                username: "",
                email: "",
                subject: "",
                message: "",
              }))
            : alert(message)
        )
        .catch((e) => console.log(e));
    }
  };
  valueChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <header id="header" className="fixed-top">
          <div className="container">
            <div className="logo float-left">
              <span>
                <h1 class="text-light">
                  <a href="index.html">Pathmeda Milk Centre</a>
                </h1>
              </span>
              <nav className="nav-menu float-right d-none d-lg-block">
                <ul>
                  <li>
                    <Button variant="link" href="ndex.html">
                      Home
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" href="#about">
                      About Us
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" href="#services">
                      Services
                    </Button>
                  </li>
                  <li>
                    <Button variant="link" href="#portfolio">
                      Product and Supplier
                    </Button>
                  </li>

                  <li>
                    <Button variant="link" href="#contact">
                      Contact Us
                    </Button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <section id="hero">
          <div className="hero-container">
            <h1>Welcome to H.K. shah & company</h1>
            <a href="#about" className="btn-get-started scrollto">
              Get Started
            </a>
          </div>
        </section>

        <main id="main">
          <section id="about" class="about">
            <div class="container">
              <div class="section-title">
                <h2>About Us</h2>
              </div>

              <div class="row">
                <div class="col-lg-6 order-1 order-lg-2">
                  <img src={Farmer} class="img-fluid" alt="" />
                </div>
                <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                  <h3>We are happy you are here.</h3>
                  <p class="font-italic">
                    Welcome to our company. we are selling only unpasteurized
                    milk. We do not sell any company's processed milk.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="services" class="services section-bg">
            <div class="container">
              <div class="section-title">
                <h2>Services</h2>
                <p></p>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-6 icon-box">
                  <div class="icon">
                    <i class="icofont-image"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Ahmedabad</a>
                  </h4>
                  <p class="description">Product List</p>
                </div>
                <div class="col-lg-4 col-md-6 icon-box">
                  <div class="icon">
                    <i class="icofont-image"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Rajkot</a>
                  </h4>
                  <p class="description">Product List</p>
                </div>
                <div class="col-lg-4 col-md-6 icon-box">
                  <div class="icon">
                    <i class="icofont-image"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Mehsana</a>
                  </h4>
                  <p class="description">Product List</p>
                </div>
                <div class="col-lg-4 col-md-6 icon-box">
                  <div class="icon">
                    <i class="icofont-image"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Jamnagar</a>
                  </h4>
                  <p class="description">Product List</p>
                </div>
                <div class="col-lg-4 col-md-6 icon-box">
                  <div class="icon">
                    <i class="icofont-image"></i>
                  </div>
                  <h4 class="title">
                    <a href="">kutch</a>
                  </h4>
                  <p class="description">Product List</p>
                </div>
                <div class="col-lg-4 col-md-6 icon-box">
                  <div class="icon">
                    <i class="icofont-image"></i>
                  </div>
                  <h4 class="title">
                    <a href="">Surat</a>
                  </h4>
                  <p class="description">Product List</p>
                </div>
              </div>
            </div>
          </section>
          <section class="call-to-action">
            <div class="container">
              <div class="text-center">
                <h3>Call To Action</h3>
                <p> </p>
                <a class="cta-btn" href="#">
                  Call To Action
                </a>
              </div>
            </div>
          </section>
          <section id="portfolio" class="portfolio">
            <div class="container">
              <div class="section-title">
                <h2>Our Supplier</h2>
              </div>
              <div class="table100 ver3 m-b-110 ">
                <div class="table100-body ">
                  <table class="table table-hover table-borderless table-responsive-lg">
                    <thead>
                      <tr>
                        <th>Item Name</th>
                        <th>Available</th>
                        <th>Month/Year</th>
                        <th>State</th>
                        <th>City</th>
                        <th>Price</th>
                        <th>seller</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>Milk(42 L)</td>
                        <td>Yes</td>
                        <td>July 2020</td>
                        <td>Gujarat</td>
                        <td>Ahmedabad</td>
                        <td>Rs.100/L </td>
                        <td>
                          Harshad parmar
                          <br /> +915464556897
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section id="contact" class="contact section-bg">
            <div class="container">
              <div class="section-title">
                <h2>Contact Us</h2>
                <p>Please feel free to connect us.</p>
              </div>

              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="contact-about">
                    <h3>Company</h3>
                    <p>Profiles and social media</p>
                    <div class="social-links">
                      <a href="#" class="twitter">
                        <i class="icofont-twitter"></i>
                      </a>
                      <a href="#" class="facebook">
                        <i class="icofont-facebook"></i>
                      </a>
                      <a href="#" class="instagram">
                        <i class="icofont-instagram"></i>
                      </a>
                      <a href="#" class="linkedin">
                        <i class="icofont-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="info">
                    <div>
                      <i class="icofont-google-map"></i>
                      <p>
                        Junavadaj,
                        <br />
                        Ahmedabad,Gujarat.
                      </p>
                    </div>

                    <div>
                      <i class="icofont-envelope"></i>
                      <p>info@example.com</p>
                    </div>

                    <div>
                      <i class="icofont-phone"></i>
                      <p>+919806764468</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-5 col-md-12">
                  <div class="form-group">
                    <input
                      type="text"
                      name="username"
                      class="form-control"
                      value={this.state.username}
                      onChange={this.valueChangeHandler}
                      placeholder="Your Name"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 4 chars"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.valueChangeHandler}
                      placeholder="Your Email"
                      data-rule="email"
                      data-msg="Please enter a valid email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      value={this.state.subject}
                      placeholder="Subject"
                      onChange={this.valueChangeHandler}
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                    />
                    <div class="validate"></div>
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      value={this.state.message}
                      onChange={this.valueChangeHandler}
                      rows="5"
                      data-rule="required"
                      data-msg="Please write something for us"
                      placeholder="Message"
                    ></textarea>
                    <div class="validate"></div>
                  </div>
                  <div class="text-center">
                    <Button onClick={this.msgSenderHandler}>
                      Send Message
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <section class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.1008620332263!2d72.56948141444283!3d23.056763520836416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e847e9d874227%3A0xd69df92e1405a206!2sJuna%20Vadaj%20BRTS!5e0!3m2!1sen!2sin!4v1595060781688!5m2!1sen!2sin"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
          ></iframe>
        </section>
        <footer id="footer">
          <div class="container">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>@H.K.Shah</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="https://bootstrapmade.com/">M.D.M.</a>
            </div>
          </div>
        </footer>
        <a href="#" class="back-to-top">
          <i class="icofont-simple-up"></i>
        </a>
      </div>
    );
  }
}

export default homepage;
