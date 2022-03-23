import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import SendEmail from '../components/SendEmail';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

function Map() {
    return (
    <SendEmail>
    <MapContainer id="map" center={[59.43, 24.75]} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[59.43673132118853, 24.75597667639976]}>
          <Popup>
            Postimaja Keskus <br /> Avatud 7:30-20:00
          </Popup>
        </Marker>
        <Marker position={[59.42736433605339, 24.723068369178765]}>
          <Popup>
            Kristiine Keskus <br /> Avatud 10:00-21:00
          </Popup>
        </Marker>
      </MapContainer>
      </SendEmail>
   );
}

export default Map;