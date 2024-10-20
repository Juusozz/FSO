const App = () => {

  const Course = (props) => {
    return (
      <div>
        {props.course.parts.map(i => 
          <p key = {i.id}>
            {i.name}
            {" "}
            {i.exercises}
          </p>
        )}
      </div>
    )
  }

  const Sum = (props) => {
    const total = props.course.parts.reduce(
      (sum, num) => sum + num.exercises, 0
    )
    console.log(total)
    return (
      <p style={{ fontWeight: 'bold' }}>
        Total of {total} exercises
      </p>
    )
  }

    const Header = ({ course }) => <h1>{course.name}</h1>

      const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10,
            id: 1
          },
          {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
          },
          {
            name: 'State of a component',
            exercises: 14,
            id: 3
          }
        ]
      }

  return (
    <div>
      <Header course = {course} />
      <Course course = {course} />
      <Sum course = {course} />
  </div>
  )
}

export default App
