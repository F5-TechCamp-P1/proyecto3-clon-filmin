import {MovieInfo} from '../components/CardsSection.jsx'
import React, {useContext} from 'react'

function CardWithDetails(){
    let title = useContext(MovieInfo);
    // console.log(title)
    return(
        <div>
            <video></video>
            <p>Calificación</p>
            <h4>{title}</h4>
            <span>géneros</span>
            <p>resumen</p>
        </div>
    )
    
}
export default CardWithDetails
