import courses from './courseArray'

const Sum = (props) => {
    const total = props.part.reduce(
      (sum, num) => sum + num.exercises, 0
    )
    return (
      <p style={{ fontWeight: 'bold' }}>
        Total of {total} exercises
      </p>
    )
  }

  const MapOutParts = (props) => {
    return (
      <div>
        {props.parts.map(a => (<p key = {a.id}>{a.name}{" "}{a.exercises}</p>))}
      </div>
    )
  }

  const Course = (props) => {
    props = courses
      return (
        <div>
        {courses.map(i => <div key = {i.id}> <h1>{i.name}</h1>
          {<MapOutParts parts = {i.parts} />}
          {<Sum part = {i.parts} />}
          </div>
        )}
        </div>
      )
    }

export default Course