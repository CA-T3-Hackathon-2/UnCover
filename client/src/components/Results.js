import React from 'react'
import Map from './Map'
import * as eventData from '../eventData.json'

const Results = () => {

        return (

            <div style={{display: 'flex'}}>
                <div style={{flex: '0.5', padding: '10px', overflowY: 'scroll', height: '80vh'}}>
                    {eventData.events.map((targetEvent) => (
                        <div>
                            <h5><a href={targetEvent.url} rel="noopener noreferrer" target="_blank">{targetEvent.name}</a></h5>
                            <p>{targetEvent.description}</p>
                            <h6>{targetEvent.location_summary}</h6>
                        </div>
                ))}
                </div>
                <div style={{flex: '0.5', margin: '10px',  overflow: 'hidden'}}>
                    <Map />
                </div>

            </div>
        )

}

export default Results 