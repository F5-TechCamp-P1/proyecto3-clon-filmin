import React, {useContext} from 'react'
import {ListTypeContext} from '../App'
import Card from '../components/Card'
import MoreArrowButton from '../components/MoreArrowButton'

function CardsSection(){
    let listType = useContext(ListTypeContext)
    let imgUrl
    if (listType === "bestMoviesList") {
        imgUrl = "https://pics.filmaffinity.com/the_substance-153348439-mmed.jpg"
    }

    return (
        <div>
            {/* Acá vamos a tener que usar un .map para que por cada pelicula se renderice una lista de tarjetas */}
            <ul>
                <li><Card imgUrl={imgUrl}/></li>
            </ul>
            <MoreArrowButton direction="Previous"  />
            <MoreArrowButton direction="Next" />
        </div>
    )
}

export default CardsSection