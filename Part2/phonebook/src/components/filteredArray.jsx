const FilteredArray = (props) => {
    const newArray = props.persons.filter(a => a.name.toLowerCase().includes(props.thisFilter.toLowerCase()))
    return (
    props.isThereAFilter
      ? newArray.map(i => <div key={i.name}><p>{i.name} {i.number}</p> </div>)
      : props.persons.map(i => <div key={i.name}><p>{i.name} {i.number}</p> </div>)
    )
  }

export default FilteredArray