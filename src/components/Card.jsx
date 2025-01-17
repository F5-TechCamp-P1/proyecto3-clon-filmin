import React, {useState} from 'react'
import CardWithDetails from '../components/CardWithDetails'

function Card ({imgUrl}){
    const [hover, setHover] = useState(false)
    
    function handleHover (){
        setHover(true)
    }

    function handleHoverOut (){
        setHover(false)
    }

    return(
        <>
        <div> 
            <img src={imgUrl} onMouseEnter={handleHover} onMouseLeave={handleHoverOut}/>
        </div>
        {hover && <CardWithDetails />}
        </>
    )
}
export default Card