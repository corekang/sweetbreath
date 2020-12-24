import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { Key } from "../../key.js"; // .gitignore
import styled from "styled-components";
import { theme } from "../../constants/theme";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const AnyReactComponent = ({ text }) => (
  <AnyReactComponentStyle>{text}</AnyReactComponentStyle>
);

const AnyReactComponentStyle = styled.div`
  font-size: 20px;
  border-radius: 4px;
  background-color: rgba(110, 112, 255, 0.2);
  border: 1px solid ${theme.colors.mainPrimary};
  padding: 12px;
  writing-mode: vertical-lr;
`;

// Map
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 25.04, // 59.95
      lng: 121.5, // 30.33
    },
    zoom: 12, // 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly height-ori: "100vh"
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: Key }} // YOUR KEY HERE
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={25.0400826} // 59.955413
            lng={121.5097607} // 30.337844
            text="甜の呼吸"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

// delete <div className="App"><SimpleMap /></div>
export function Map() {
  return <SimpleMap />;
}

// export default Map;
