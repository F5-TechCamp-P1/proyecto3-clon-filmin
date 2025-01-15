import Card from '../components/Card'
//import MoreArrowButton from './MoreArrowButton.jsx'

function CardsSection({listType}){
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
            {/* <MoreArrowButton direction="Previous"  />
            <MoreArrowButton direction="Next" /> */}
        </div>
    )
}

export default CardsSection