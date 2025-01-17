import React, {useState} from 'react'
import CardWithDetails from '../components/CardWithDetails'

function Card ({imgUrl}){
    const [hover, setHover] = useState(false)
    
    function handleHover (){
        setHover(true)
    }

    return(
        <>
        <div> 
            <img src={imgUrl} onMouseEnter={handleHover} />
        </div>
        {hover && <CardWithDetails />}
        </>
    )
}
export default Card