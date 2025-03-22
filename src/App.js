import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Amir Said",
        bio: "Aspiring Web Developer",
        imgSrc: "https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/480141567_993613272660952_3657820907559190351_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rS_TSN5ssC8Q7kNvgHaMwGF&_nc_oc=AdnYqZ8QfjZlrL3KQ8rAoHlWQBnV0zXG5tcI2AMuzxaxEXLvLKvZW4pbUTdctLUbcnO5HEcA20JsNI3WXjNhl1B1&_nc_zt=23&_nc_ht=scontent.ftun15-1.fna&_nc_gid=MNr2fpOR5zWAU2wBLlqCIQ&oh=00_AYH0pHB_aDAX-WQlrDbZBgUfBBGWO9-DO1j8XfLWb2cjug&oe=67E42717",
        profession: "Full-Stack Developer"
      },
      shows: false,
      mountedTime: new Date(),
      timeInterval: 0
    };
  }

  
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ timeInterval: Math.floor((new Date() - this.state.mountedTime) / 1000) });
    }, 1000);
  }

  
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button className="toggle-button" onClick={this.toggleShow}>
          {this.state.shows ? "Hide Profile" : "Show Profile"}
        </button>

        {this.state.shows && (
          <div className="profile">
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <img src={this.state.person.imgSrc} alt="Profile" style={{ width: "150px", borderRadius: "50%" }} />
            <h3>{this.state.person.profession}</h3>
          </div>
        )}

        <p className="timer">Time since mount: {this.state.timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;

