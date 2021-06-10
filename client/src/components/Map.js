import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import * as eventData from '../eventData.json'

const Map = () => {


    const [viewport, setViewport] = useState({
        latitude: -37.8136, 
        longitude: 144.9631, 
        zoom: 12, 
    
    })

    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const listener = (event) => {
            if (event.key === "Escape") {
                setSelectedEvent(null)
            }
        }
        window.addEventListener("keydown", listener)
        
        return () => {
            window.removeEventListener("keydown", listener)
        }
    }, [])


    return (
        <div>
        <ReactMapGL 
        {...viewport} 
        width='60vw'
        height='80vh' 
        mapStyle="mapbox://styles/darkoau/ckpq9zkyh02cv17n1a7py2gfh"
        onViewportChange={(newView) => {
            setViewport(newView);
        }}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        >   
            {eventData.events.map((targetEvent) => (
                <Marker key={targetEvent.id} 
                latitude={targetEvent.point.lat} 
                longitude={targetEvent.point.lng} 
                style={{width: '40px', height: '40px', overflow: 'hidden'}}
                >
                    <button className="markerBtn" onClick={(event) => {
                        event.preventDefault(); 
                        setSelectedEvent(targetEvent) 
                    }}>
                        <img src='assets/pin.png' alt='event-display' className='markerBtnImg'/>
                    </button>
                </Marker>
            ))}
            {selectedEvent ? (
                <Popup 
                latitude={selectedEvent.point.lat} 
                longitude={selectedEvent.point.lng}
                onClose={() => {
                    setSelectedEvent(null); 
                }}>
                    <div className={{
                        width: '10vw', 
                        height: '40vh',   
                        fontSize: '12px',
                        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
                        color: 'rgb(35, 37, 37)'
                    }}>
                        <h4>{selectedEvent.name}</h4>
                        <h5>{selectedEvent.location_summary}</h5>
                        <h6>{selectedEvent.address}</h6>
                        <p>{selectedEvent.description}</p>
                        <h6>Valid until: {selectedEvent.datetime_end}</h6>
                        <a href={selectedEvent.url} rel="noopener noreferrer" target="_blank">Go to event</a>
                    </div>
                </Popup>
            ) : null}
        </ReactMapGL>
        </div>
    )

}

export default Map 