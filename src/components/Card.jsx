import React, {useState, useContext} from 'react'
import CardWithDetails from '../components/CardWithDetails'
import { ListTypeContext } from '../App'

function Card ({imgUrl}){
    let listType = useContext(ListTypeContext)
    
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
        {hover && listType === "seriesList" && ( 
            <div> 
            <CardWithDetails /> 
            </div> )}
        </>
    )
}
export default Card