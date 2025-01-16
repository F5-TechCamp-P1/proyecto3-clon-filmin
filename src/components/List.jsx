import CardsSection from './CardsSection.jsx'


function List ({listTitle, listType}){
    
    return(
        <div>
            <h3>{listTitle}</h3>
            <CardsSection
                listType={listType}
            />
        </div>
    )
}
export default List