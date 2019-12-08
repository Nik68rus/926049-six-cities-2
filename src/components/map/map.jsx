import leaflet from 'leaflet';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this._icon = leaflet.icon({
      iconUrl: `../img/pin.svg`,
      iconSize: [30, 30]
    });
    this._activeIcon = leaflet.icon({
      iconUrl: `../img/pin-active.svg`,
      iconSize: [30, 30]
    });
    this._mapRef = React.createRef();
    this._map = null;
    this._markers = [];
  }

  componentDidMount() {
    const {city, offers} = this.props;
    this._mapInit(city, offers, this._mapRef.current);
  }

  componentDidUpdate() {
    const {city, offers, activePin} = this.props;
    this._renderOffers(offers, activePin);
    this._map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
  }

  _mapInit(currentCity, offersList, container) {
    const {activePin} = this.props;

    this._city = [currentCity.location.latitude, currentCity.location.longitude];
    this._zoom = currentCity.location.zoom;

    this._map = leaflet.map(container, {
      center: this._city,
      zoom: this._zoom,
      zoomControl: false,
      marker: true
    });
    this._renderTitleLayer();
    this._renderOffers(offersList, activePin);
    this._map.setView(this._city, this._zoom);
  }

  _renderOffers(offers, activePin) {
    if (this._markers.length > 0) {
      this._removeOffers();
    }
    if (offers) {
      offers
      .forEach((offer) => {
        const currentIcon = offer.id === activePin ? this._activeIcon : this._icon;
        this._offerMarker = leaflet
          .marker(offer.coords, {icon: currentIcon})
          .addTo(this._map);
        this._markers.push(this._offerMarker);
      });
    }
  }

  _removeOffers() {
    this._markers.forEach((marker) => {
      this._map.removeLayer(marker);
    });
    this._markers = [];
  }

  _renderTitleLayer() {
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this._map);
  }

  render() {
    return <div id="map" style={{height: 100 + `%`}} ref={this._mapRef}></div>;
  }
}

Map.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }).isRequired
  }).isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        coords: PropTypes.array.isRequired
      })
  ),
  activePin: PropTypes.number.isRequired,
};

export default Map;

