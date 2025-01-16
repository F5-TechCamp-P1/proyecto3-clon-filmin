
function MoreArrowButton ({direction}){
    const moreArrowImg = ""
    direction == "Previous" ? moreArrowImg = "https://w7.pngwing.com/pngs/775/103/png-transparent-arrow-computer-icons-right-arrow-angle-hand-desktop-wallpaper.png" : moreArrowImg = "https://cdn-icons-png.flaticon.com/512/3272/3272603.png"
    
    return (
    <button><img src={moreArrowImg} /></button> 
    )
}

export default MoreArrowButton