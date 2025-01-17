import Card from './Card.jsx'
import MoreArrowButton from './MoreArrowButton.jsx'

function CardsSection(){

    return (
        <div>
            {/* Acá vamos a tener que usar un .map para que por cada pelicula se renderice una lista de tarjetas */}
            <ul>
                <li><Card /></li>
            </ul>
            <MoreArrowButton direction="Previous"  />
            <MoreArrowButton direction="Next" />
        </div>
    )
}

export default CardsSection