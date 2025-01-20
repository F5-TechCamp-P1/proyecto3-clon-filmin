
function MoreArrowButton ({direction}){
    let moreArrowImg = ""
    direction == "Next" ? moreArrowImg = "../assets/chevron_right_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg" : moreArrowImg = "../assets/chevron_left_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"
    
    return (
    <button><img src={moreArrowImg} /></button> 
    )
}

export default MoreArrowButton