import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red' />;

class GoogleMap extends Component {
  static defaultProps = {
    zoom: 11
  };

  render() {
    const {lat ,lng } = this.props
    console.log(lat ,lng)
    return (
      // Important! Always set the container height explicitly

      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBPH7Ddp2wg7ySUcTkwqwFHZ0_U8qYoMos' }}
          defaultCenter={{lat,lng}}
          defaultZoom={this.props.zoom}
        >
        <AnyReactComponent
          lat={lat}
          lng={lng}
        />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;