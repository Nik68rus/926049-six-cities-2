import leaflet from 'leaflet';
import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._city = [52.38333, 4.9];
    this._zoom = 12;
    this._icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    this._mapRef = React.createRef();
    this._map = null;
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}} ref={this._mapRef}></div>;
  }

  _mapInit(currentCity, offersList, container) {
    // this._city = location.latLng;
    // this._zoom = location.zoom;
    this._map = leaflet.map(container, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    this._renderLayer();
    if (offersList) {
      offersList
      .forEach((offer) => {
        leaflet
        .marker(offer.coords, {icon: this._icon})
        .addTo(this._map);
      });
    }
    this._map.setView(this._city, this._zoom);
  }

  _renderLayer() {
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);
  }

  componentDidMount() {
    const {city, offers} = this.props;
    this._mapInit(city, offers, this._mapRef.current);
  }
}

Map.propTypes = {
  city: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latLng: PropTypes.array.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coords: PropTypes.array.isRequired
      })
  ),
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  offers: state.offers,
  location: state.location,
});

export {Map};

export default connect(mapStateToProps)(Map);

