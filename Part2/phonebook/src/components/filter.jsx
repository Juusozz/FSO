const FilterObject = (props) => {
    return (
    <div>
        filter shown with <input value = {props.thisFilter} onChange={props.handleFilterSubmit}/>
    </div>
    )
}

export default FilterObject
