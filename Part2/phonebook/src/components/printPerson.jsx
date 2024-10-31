const PrintPerson = ({name, number, personDelete}) => {
    return (
    <div>
      <p>{name} {number} <button onClick = {personDelete} > delete </button></p>
    </div>)
  }
export default PrintPerson

