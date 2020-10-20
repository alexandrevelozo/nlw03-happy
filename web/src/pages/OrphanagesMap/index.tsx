import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { FiPlus, FiArrowRight } from 'react-icons/fi'

import api from '../../services/api';

import mapMarkerImg from '../../images/map-marker.svg'
import mapIcon from '../../utils/mapIcon';

import { PageMap, Aside } from './styles';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    })
  }, [])

  return (
    <PageMap>
      <Aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Itanhaém</strong>
          <span>São Paulo</span>
        </footer>
      </Aside>

      <Map 
        center={[-24.1893376,-46.8058112]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer 
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
          />

        {orphanages.map(orphanage => {
          return (
            <Marker
            key={orphanage.id} 
            icon={mapIcon}
            position={[orphanage.latitude,orphanage.longitude]}
          >
            <Popup 
              closeButton={false} 
              minWidth={240} 
              maxWidth={240} 
              className="map-popup"
            >
              {orphanage.name}

              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="#FFF" />
              </Link>
            </Popup>
          </Marker>
          )
        })}    
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </PageMap>
  );
};

export default OrphanagesMap;
