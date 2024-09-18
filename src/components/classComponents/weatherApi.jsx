import axios from "axios";
import { Component } from "react";
import Card from "react-bootstrap/Card";
import { CustomSpinner } from "../spinners/customSpinner";

export class Weather extends Component {
  state = {
    result: [],
    coords: {},
    isLoading: true,
    name: ""
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          this.fetchData(latitude, longitude);
        }
      });
    } else {
      console.error("Error");
    }
  }
  getBackgroundImage = () => {
    const temp = this.state.result.temp_max;
    if (Math.floor(temp - 273.15) < 0) {
      return "url('https://media.istockphoto.com/id/637409946/photo/thermometer-on-snow-shows-low-temperatures-under-zero.jpg?s=612x612&w=0&k=20&c=fmRJtO3RRIMA6TV3JI93CSlteBTrQI1PAjmWaRLiBlA=')";
    } else if (Math.floor(temp - 273.15) >= 0 && Math.floor(temp - 273.15) < 25) {
      return "url('https://media.istockphoto.com/id/1501165712/photo/the-evening-sky-is-filled-with-the-creative-and-dusky-cirrus-clouds.jpg?s=612x612&w=0&k=20&c=0NiKxj0FFj0n8ydsOg3aQaaxXyVwD-GrdeXlyw8oW9w=')";
    } else {
      return "url('https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.jpg?s=612x612&w=0&k=20&c=LwLCGF902C-DNwKgCMCR12zFnB4g1INWzlk1JPOidRk=')";
    }
  };

  fetchData = async (lat, long) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=873229bfa3142e94e0ba325058db1d86`
    );
    this.setState({
      result: data.main,
      coords: data.coord,
      name: data.name,
      isLoading: false,
    });
  };

  render() {
    const { lon, lat } = this.state.coords;
    const { temp_max, temp_min } = this.state.result;
    const { name } = this.state;
    return (
      <>
        {this.state.isLoading ? (
          <CustomSpinner />
        ) : (
          <>
            <div
              style={{
                display: "flex",
                height: "100vh",
                backgroundImage: this.getBackgroundImage(),
                filter: "brightness(50%)",
                backgroundSize: "cover",
              }}
            >
              <Card
                style={{
                  width: "18rem",
                  backgroundColor:"transparent",
                  border:"none",
                  color:"white"
                }}
              >
                <Card.Body>
                  <Card.Text>Longitude: {lon}</Card.Text>
                  <Card.Text>Latitude: {lat}</Card.Text>
                  <Card.Text>Location:{name}</Card.Text>
                  <Card.Text>
                    Max-Temperature: {Math.floor(temp_max - 273.15)}° C
                  </Card.Text>
                  <Card.Text>
                    Min-Temperature: {Math.floor(temp_min - 273.15)}° C
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </>
        )}
      </>
    );
  }
}