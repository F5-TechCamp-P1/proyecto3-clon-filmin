import CardsSection from './CardsSection.jsx'


function List ({listTitle}){
    
    return(
        <div>
            <h3>{listTitle}</h3>
            <CardsSection />
        </div>
    )
}
export default List