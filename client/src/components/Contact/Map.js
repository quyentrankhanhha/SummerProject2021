import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 65.02,
      lng: 25.4
    },
    zoom: 11
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={65.021545} lng={25.469885} text='My Marker' />
        </GoogleMapReact>
      </div>
    )
  }
}

export default Map
