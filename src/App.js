import React, { Component } from 'react';
import Headroom from 'react-headroom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Headroom>
          <div className="header">Header</div>
        </Headroom>

        <div className="main-content">
          <div className="hero">
            <p>Hero</p>
          </div>

          <div className="white-section">
            <div className="jumbotron">
              <h1 className="jumbo-text">Make a good first impression</h1>
              <p>
                This is where you'd let people know what your company is about.
                A short paragraph to outline your main selling point
              </p>
            </div>
            <div className="signup">
              <h1>Sign up for updates</h1>
              <input
                className="inputs underline--magical"
                placeholder="Email"
                required
              />
              <p className="subtle-text">
                Sign up to recieve exlusive deals and free workout plans every
                month.
              </p>
              <button type="button" className="btn btn-primary btn-lg outline">
                Sign Up
              </button>
            </div>
          </div>

          <div className="accent-section">
            <div className="card-light">
              Check this out
              <button className="success-button">Click here</button>
            </div>
          </div>

          <div className="white-section">
            <div className="card-dark">
              Check this out
              <button className="success-button">Click here</button>
            </div>

            <div className="card-dark">
              Check this out
              <button className="success-button">Click here</button>
            </div>
          </div>

          <div className="accent-section">
            <h1 className="jumbo-text">Check this out</h1>
            <button className="success-button">Click here</button>
          </div>

          <div className="white-section">
            <img
              src="https://ak2.picdn.net/shutterstock/videos/23723659/thumb/1.jpg"
              alt="weights"
            />
            <div className="jumbotron">
              <h1 className="jumbo-text">Make a good first impression</h1>
              <p>
                This is where you'd let people know what your company is about.
                A short paragraph to outline your main selling point
              </p>
            </div>
          </div>
          <div className="footer">
            <div className="row">Footer Content</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
