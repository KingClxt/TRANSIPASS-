import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { useEffect, useState } from 'react';

// Définition de l'icône avec des URLs absolues
const customIcon = new Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const CarteBox = () => {
    // Position par défaut (Abidjan) et état pour contrôler le chargement
    const [position, setPosition] = useState([5.3600, -4.0083]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]);
                setIsLoading(false);
            },
            (error) => {
                console.log("Erreur de géolocalisation :", error);
                setIsLoading(false);
            }
        );
    }, []);

    // Ne rendre la carte que lorsque nous avons la position
    if (isLoading) {
        return <div className="h-[20rem]">Chargement de la carte...</div>;
    }

    return (
        <div className="h-[20rem] z-30">
            <MapContainer 
                center={position} 
                zoom={13} 
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customIcon}>
                    <Popup>
                        Vous êtes ici !
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};