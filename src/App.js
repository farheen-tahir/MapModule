// import { Component } from 'react';
// import { Map,GoogleApiWrapper} from "google-maps-react";
// import './App.css';

// class MapContainer extends Component {
//   render() {
//     return (
//       <Map
//       google={this.props.google}
//       style={{width:"100%",height:"100%" }}
//       zoom={10}
//       initialCenter={{
//         lat:33.738045,
//         lng:73.084488
//       }}
//       />
//     );
//   }
// }
// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
// })(MapContainer)

import {useJsApiLoader} from "@react-google-maps/api";
import Map from "./components/Map";
import { mapOptions } from "./components/MapConfiguration";
function App() {
  const {isLoaded}=useJsApiLoader({
    id:mapOptions.googleMapApiKey,
    googleMapApiKey:mapOptions.googleMapApiKey
  });
  return(
    <div className="App">
      <h1>React Google Map</h1>
      <Map isLoaded={isLoaded}/>
    </div>
  );
}
export default App;