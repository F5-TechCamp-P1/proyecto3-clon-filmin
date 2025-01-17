
function MoreArrowButton ({direction}){
    let moreArrowImg = ""
    direction == "Next" ? moreArrowImg = "../assets/arrow-next-small-svgrepo-com.svg" : moreArrowImg = "../assets/arrow-prev-small-svgrepo-com.svg"
    
    return (
    <button><img src={moreArrowImg} /></button> 
    )
}

export default MoreArrowButton